// Copia dist/ al repositorio publicado (../personal), que es el que sirve GitHub Pages.
// Borra todo lo que hay allí menos .git y pega dist/ completa. Si no encuentra la carpeta, solo avisa.
import { existsSync, readdirSync, rmSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');
const TARGET = resolve(ROOT, '..', 'personal');
const KEEP = ['.git'];

if (!existsSync(TARGET)) {
  console.warn(`⚠ No se encontró la ruta del proyecto (${TARGET}) para copiar los nuevos cambios.`);
  process.exit(0);
}
// Sin .git no es el repositorio esperado: mejor no borrar nada
if (!existsSync(resolve(TARGET, '.git'))) {
  console.error(`✗ ${TARGET} no es un repositorio git; no se copió nada.`);
  process.exit(1);
}
if (!existsSync(DIST) || readdirSync(DIST).length === 0) {
  console.error('✗ dist/ está vacía; no se copió nada.');
  process.exit(1);
}

for (const name of readdirSync(TARGET)) {
  if (!KEEP.includes(name)) rmSync(resolve(TARGET, name), { recursive: true, force: true });
}
cpSync(DIST, TARGET, { recursive: true });
console.log(`✓ dist/ copiada a ${TARGET}`);
