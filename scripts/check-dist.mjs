// COMPROBACIÓN DE dist/ (npm run check, después de compilar)
// 1. Cada ruta local de los HTML, CSS, JS, botones.json, perfil.json y el manifest existe en dist/.
// 2. Todas son relativas: el sitio vive en una subcarpeta (berthaestrada.github.io/berthaestrada/), así que una ruta
//    que empieza con "/" apuntaría fuera de él. Excepción: 404.html, que usa <base> (ver el archivo).
// 3. No se cuela nada de desarrollo: source maps, páginas de trabajo, documentación, código sin compilar.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, extname } from 'node:path';

const DIST = resolve('dist');
const errors = [];

if (!existsSync(DIST)) {
  console.error('No existe dist/: ejecuta antes `npm run compile`.');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(DIST);
const rel = (p) => relative(DIST, p).replace(/\\/g, '/');
const isExternal = (ref) => /^(https?:|mailto:|tel:|sms:|data:|javascript:|blob:|#|\/\/)/i.test(ref);

// from: archivo que contiene la ruta; base: carpeta desde la que se resuelve (la de la página, para el JS y los JSON)
function check(ref, from, kind, base = dirname(from)) {
  // 404.html: marcador de los botones "Próximamente" (js/main.js los intercepta); la página ya no existe
  if (!ref || isExternal(ref) || ref.includes('${') || ref === '404.html') return;
  const clean = ref.split(/[?#]/)[0];
  if (!clean || clean === './') return;
  if (clean.startsWith('/') && rel(from) !== '404.html') {
    errors.push(`${rel(from)}: ${kind} "${ref}" es absoluta (en una subcarpeta apunta fuera del sitio)`);
    return;
  }
  const path = clean.startsWith('/') ? join(DIST, clean) : join(base, decodeURIComponent(clean));
  if (!existsSync(path)) errors.push(`${rel(from)}: ${kind} "${ref}" no existe`);
}

// Recorre un JSON y comprueba los valores que parecen rutas locales de archivo
function checkJson(value, from, base) {
  if (typeof value === 'string') {
    if (/^[\w./-]+\.(svg|png|jpe?g|webp|gif|ico|html|pdf|json)([?#].*)?$/i.test(value)) check(value, from, 'ruta del JSON', base);
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((v) => checkJson(v, from, base));
  }
}

for (const file of files) {
  const ext = extname(file);
  const name = rel(file);
  const text = ['.html', '.css', '.js', '.json', '.webmanifest'].includes(ext) ? readFileSync(file, 'utf8') : '';

  if (ext === '.html') {
    // <base> no es un enlace: indica desde dónde se resuelven los demás (404.html, siempre en la raíz)
    for (const [, ref] of text.replace(/<base\b[^>]*>/g, '').matchAll(/\s(?:href|src)=["']?([^"'\s>]+)/g)) check(ref, file, 'enlace');
  }
  if (ext === '.css') {
    for (const [, ref] of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) check(ref, file, 'url()');
  }
  if (ext === '.js' || ext === '.html') {
    // Rutas que el JS arma en tiempo de ejecución: relativas a la página que lo carga (raíz de dist/)
    for (const [, ref] of text.matchAll(/["'`]((?:images|icons|cv)\/[\w./-]+\.\w+|[\w-]+\.json)["'`]/g)) {
      check(ref, file, 'ruta del JS', name.startsWith('cv/') ? join(DIST, 'cv') : DIST);
    }
  }
  if (ext === '.json' || ext === '.webmanifest') {
    try { checkJson(JSON.parse(text), file, DIST); } catch (e) { errors.push(`${name}: JSON inválido (${e.message})`); }
  }
  if (/sourceMappingURL=/.test(text)) errors.push(`${name}: incluye una referencia a source map`);
}

// Nada de desarrollo en la publicación
const FORBIDDEN = [
  [/\.map$/, 'source map'],
  [/\.md$/i, 'documentación'],
  [/^(admin|preview|index\.example|z+)\.html$/, 'página de trabajo o herramienta local'],
  [/^botones\.example\.json$/, 'catálogo de botones (solo para el admin)'],
  [/^images\/(open-to-work\.gif|video\.jpg)$/, 'imagen solo del README'],
  [/(^|\/)\.(?!nojekyll$)[^/]+$/, 'archivo oculto'],
  [/^package(-lock)?\.json$|^vite\.config\.js$|^scripts\//, 'archivo de la compilación']
];
for (const file of files.map(rel)) {
  const hit = FORBIDDEN.find(([re]) => re.test(file));
  if (hit) errors.push(`${file}: no debería publicarse (${hit[1]})`);
}

// js/main.js y css/*.css tienen que estar procesados (pocas líneas, sin comentarios de bloque)
for (const file of files.filter((f) => /^(js\/[^/]+\.js|css\/[^/]+\.css)$/.test(rel(f)))) {
  const text = readFileSync(file, 'utf8');
  if (text.split('\n').length > 5 || /\/\*(?!!)/.test(text)) errors.push(`${rel(file)}: no está minificado`);
}

for (const required of ['index.html', '.nojekyll', 'js/main.js', 'botones.json', 'perfil.json']) {
  if (!existsSync(join(DIST, required))) errors.push(`falta ${required}`);
}
if (existsSync(join(DIST, 'CNAME'))) errors.push('CNAME: el sitio no usa dominio propio; GitHub Pages redirigiría a ese dominio');

const size = files.reduce((sum, f) => sum + statSync(f).size, 0);
if (errors.length) {
  console.error(`✗ dist/ tiene ${errors.length} problema(s):\n  - ${errors.join('\n  - ')}`);
  process.exit(1);
}
console.log(`✓ dist/ correcto: ${files.length} archivos (${(size / 1024 / 1024).toFixed(2)} MB), rutas relativas y sin archivos de desarrollo.`);
