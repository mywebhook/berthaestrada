// BUILD DE PRODUCCIÓN (Vite)
// Los archivos de este repositorio siguen siendo el código legible: `npm run dev` los sirve tal cual.
// `npm run build` genera dist/ con solo lo que necesita el sitio publicado (minificado, JS ofuscado, sin
// source maps), lo comprueba y lo abre en el navegador. `npm run compile` solo compila (lo usa GitHub Actions).
// Se publica en https://alvarosiles.github.io/personal/ (sin dominio propio): todas las rutas son relativas.
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { cpSync, existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { transform as esbuild } from 'esbuild';
import { minify as minifyHtml } from 'html-minifier-terser';
import { minify as terser } from 'terser';
import JavaScriptObfuscator from 'javascript-obfuscator';

// Páginas públicas
const PAGES = ['index', 'casa'];

// Scripts clásicos (sin type="module"): Vite no los procesa, así que se minifican y ofuscan aquí
const CLASSIC_SCRIPTS = ['js/config.js', 'js/main.js', 'js/alquileres.js', 'js/casa.js'];

// Hojas de estilo: cada una se minifica por separado y se queda en css/. Vite las juntaría en otro orden
// (index antes que brands), y en CSS el orden decide qué regla gana.
const STYLES = readdirSync('css').filter((f) => f.endsWith('.css')).map((f) => `css/${f}`);

// Se copian tal cual: las rutas de íconos, imágenes y botones salen de botones.json y perfil.json en
// tiempo de ejecución, y Vite no puede detectarlas.
const STATIC = [
  'icons', 'images', 'botones.json', 'perfil.json', 'favicon.ico', 'apple-touch-icon.png', 'site.webmanifest',
  'robots.txt', 'sitemap.xml', 'LICENSE'
];
// Solo los usa el README (el GIF pesa 1,1 MB)
const NOT_PUBLISHED = ['images/open-to-work.gif', 'images/video.jpg'];

// Ofuscación moderada: renombra variables locales y mueve textos a una tabla. No renombra globales
// (otros scripts podrían usarlas), sin autodefensa ni bloqueo de las herramientas del navegador.
const obfuscate = (code, prefix) => JavaScriptObfuscator.obfuscate(code, {
  compact: true,
  identifierNamesGenerator: 'hexadecimal',
  identifiersPrefix: prefix, // distinto por script: los <script> de una página comparten el ámbito global
  renameGlobals: false,
  stringArray: true,
  stringArrayThreshold: 0.5,
  stringArrayEncoding: [],
  splitStrings: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
  transformObjectKeys: false,
  unicodeEscapeSequence: false
}).getObfuscatedCode();

const TERSER = { compress: { passes: 2 }, mangle: true, format: { comments: false } };

// Minifica (y ofusca, salvo en `build:plain`) un JS clásico
async function processScript(code, prefix, obfuscated) {
  const min = (await terser(code, TERSER)).code;
  return obfuscated ? obfuscate(min, prefix) : min;
}

function classicScriptsAndHtml(obfuscated) {
  return {
    name: 'classic-scripts-and-html',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_, bundle) {
      // 1. Scripts clásicos y hojas de estilo: se emiten ya procesados, en la misma ruta; el HTML los pide
      //    con ?v=<hash> para que el navegador no use una versión vieja guardada en caché
      const versions = {};
      const emit = (fileName, source) => {
        versions[fileName] = createHash('sha256').update(source).digest('hex').slice(0, 8);
        this.emitFile({ type: 'asset', fileName, source });
      };
      for (const file of CLASSIC_SCRIPTS) {
        emit(file, await processScript(readFileSync(file, 'utf8'), `s${Object.keys(versions).length}_`, obfuscated));
      }
      for (const file of STYLES) {
        emit(file, (await esbuild(readFileSync(file, 'utf8'), { loader: 'css', minify: true })).code);
      }

      // 2. HTML minificado, con sus <style> y <script> en línea. Los <script> grandes (datos y lógica del
      //    CV y de proyectos) también se ofuscan. conservativeCollapse deja un espacio donde había espacios.
      let inline = 0;
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.html')) continue;
        let html = String(file.source);
        for (const [path, v] of Object.entries(versions)) {
          html = html.replace(new RegExp(`((?:src|href)=["'](?:\\./|/|(?:\\.\\./)+)?)${path.replace('.', '\\.')}(["'])`, 'g'), `$1${path}?v=${v}$2`);
        }
        file.source = await minifyHtml(html, {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: async (code) => processScript(code, `i${inline++}_`, obfuscated && code.length > 2000)
        });
      }
    }
  };
}

// Enlaces que Vite no debe tocar (vite-ignore):
// - el manifest se queda en la raíz (se copia tal cual): en assets/build/ sus rutas a images/ fallarían;
// - las hojas de estilo locales: las procesa classicScriptsAndHtml, una por una y en su orden.
function keepAsIs() {
  return {
    name: 'keep-as-is',
    apply: 'build',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/<link\s+rel=["'](?:manifest["']|stylesheet["'](?=\s+href=["'](?!https?:|\/\/)))/g, '$& vite-ignore')
    }
  };
}

// `npm run dev` sirve el sitio en la raíz (localhost:5173/): ahí la 404 usa la base "/" en vez de "/personal/",
// así el navegador no pide primero los recursos en una carpeta que en local no existe
function devBase404() {
  return {
    name: 'dev-base-404',
    apply: 'serve',
    transformIndexHtml: (html, { path }) => (path === '/404.html' ? html.replace(/<base\s+href="[^"]*"/, '<base href="/"') : html)
  };
}

function copyStatic() {
  return {
    name: 'copy-static',
    apply: 'build',
    writeBundle({ dir }) {
      // En Windows, cpSync pasa las rutas con el prefijo \\?\: se comparan por su final, con "/"
      const norm = (p) => p.replace(/\\/g, '/');
      const skip = (src) => NOT_PUBLISHED.some((f) => norm(src).endsWith(`/${f}`)) || /\/(\.[^/]+|Thumbs\.db|desktop\.ini)$/i.test(norm(src));
      for (const item of STATIC) {
        if (!existsSync(item)) continue;
        cpSync(item, resolve(dir, item), { recursive: true, filter: (src) => !skip(src) });
      }
      // Sin Jekyll: GitHub Pages sirve los archivos tal cual
      writeFileSync(resolve(dir, '.nojekyll'), '');
    }
  };
}

export default defineConfig(({ mode }) => ({
  appType: 'mpa',
  // Rutas relativas (./assets/build/…): funciona en alvarosiles.github.io/personal/ y en cualquier dominio
  base: './',
  publicDir: false,
  plugins: [keepAsIs(), devBase404(), classicScriptsAndHtml(mode !== 'plain'), copyStatic()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Carpeta propia para los archivos generados (con hash), separada de icons/, images/…
    assetsDir: 'assets/build',
    sourcemap: false,
    modulePreload: { polyfill: false },
    minify: 'terser',
    terserOptions: { compress: { passes: 2 }, format: { comments: false } },
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((p) => [p, resolve(import.meta.dirname, `${p}.html`)]))
    }
  }
}));
