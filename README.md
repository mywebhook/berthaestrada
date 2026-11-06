# Bertha Estrada · Alquiler de habitaciones y viviendas

Sitio web de **Bertha Estrada**, que alquila habitaciones y viviendas en Santa Cruz de la Sierra, Bolivia.
Muestra las casas disponibles con fotos, precios y ubicación en un mapa. Desde el sitio se puede pedir una
reserva por WhatsApp y pagar con QR.

**Sitio publicado:** <https://berthaestrada.github.io/berthaestrada/>

---

## Contenido

- [Funciones](#funciones)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Desarrollo local](#desarrollo-local)
- [Editar el contenido](#editar-el-contenido)
- [Publicación](#publicación)
- [Créditos y licencias de terceros](#créditos-y-licencias-de-terceros)
- [Licencia](#licencia)

## Funciones

- **Página principal** ([index.html](index.html)): foto y presentación, accesos rápidos (WhatsApp, llamar,
  ubicación, compartir), redes sociales y botón para guardar el contacto.
- **Casas y habitaciones**: mapa interactivo con una marca por casa y miniaturas con las habitaciones libres.
  Cada casa tiene su propia página de detalle ([casa.html](casa.html)), con fotos, precios, servicios y
  condiciones.
- **Reservas**: formulario que arma el mensaje y lo envía por WhatsApp. Se puede abrir con la casa y la
  habitación ya elegidas.
- **Pago con QR**: ventana con el QR de cobro del banco e instrucciones para enviar el comprobante.
- **Compartir**: código QR del sitio, que también se puede descargar para imprimirlo.
- Diseño adaptado a celulares, accesible y preparado para buscadores (`sitemap.xml`, `robots.txt`, manifiesto web).

## Tecnologías

| Uso | Herramienta |
| --- | --- |
| Sitio | HTML, CSS y JavaScript (sin frameworks) |
| Compilación | [Vite 6](https://vite.dev), Terser, esbuild, html-minifier-terser, javascript-obfuscator |
| Mapa | [Leaflet](https://leafletjs.com) + [OpenStreetMap](https://www.openstreetmap.org) |
| Código QR | [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) |
| Hosting | GitHub Pages, publicado con GitHub Actions |

## Estructura del proyecto

```
├── index.html              Página principal
├── casa.html               Detalle de cada casa (casa.html?id=casa-1 … casa-4)
├── js/
│   ├── config.js           Datos del sitio: casas, habitaciones, precios, WhatsApp, pago
│   ├── alquileres.js       Casas, mapa, reservas y pago
│   ├── casa.js             Página de detalle de una casa
│   └── main.js             Perfil, botones, compartir y utilidades generales
├── css/                    Estilos (se cargan en orden; las reglas posteriores ganan)
├── botones.json            Botones de redes sociales y enlaces
├── perfil.json             Nombre, foto y apariencia del perfil
├── icons/                  Íconos de los botones
├── images/                 Fotos de casas y habitaciones, avatar, QR e íconos de la app
├── scripts/check-dist.mjs  Comprueba la versión compilada antes de publicarla
├── vite.config.js          Configuración de la compilación
└── .github/workflows/      Publicación automática en GitHub Pages
```

## Desarrollo local

Requisitos: [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install        # instalar dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo con recarga automática
npm run build      # compilar, comprobar y abrir la versión de producción
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Sirve los archivos tal cual, en `http://localhost:5173` |
| `npm run build` | Compila en `dist/`, lo comprueba y abre la vista previa |
| `npm run compile` | Solo compila (lo usa GitHub Actions) |
| `npm run build:plain` | Compila sin ofuscar el JavaScript (para depurar) |
| `npm run check` | Comprueba `dist/`: rutas, archivos que faltan y que no se cuele nada de desarrollo |
| `npm run preview` | Abre la última versión compilada |

## Editar el contenido

Casi todo el contenido se cambia sin tocar código:

| Qué cambiar | Dónde |
| --- | --- |
| WhatsApp, teléfono, casas, habitaciones, precios, disponibilidad, QR de pago | [js/config.js](js/config.js) |
| Redes sociales y enlaces | [botones.json](botones.json) |
| Nombre, foto y colores del perfil | [perfil.json](perfil.json) |
| Fotos | [images/](images/) (mantener el mismo nombre de archivo, o actualizar la ruta en `config.js`) |

- Los datos marcados con `provisional: true` en `config.js` muestran la etiqueta "Dato de ejemplo". Cuando el
  dato sea el real, quita esa marca.
- `config.js` es público: **no pongas contraseñas, claves ni números de cuenta**.
- Si agregas una página, súmala a [sitemap.xml](sitemap.xml).

## Publicación

Cada push a `main` dispara [el workflow de publicación](.github/workflows/deploy.yml), que:

1. instala dependencias y compila el sitio (minificado y con el JavaScript ofuscado);
2. comprueba `dist/` con `npm run check` y detiene la publicación si encuentra un problema;
3. publica `dist/` en GitHub Pages.

**Configuración inicial (una sola vez):** en el repositorio, ir a *Settings → Pages → Build and deployment* y
elegir **Source: GitHub Actions**.

La carpeta `dist/` se genera en cada compilación y no se guarda en el repositorio.

## Créditos y licencias de terceros

El sitio usa estos componentes de terceros, cada uno con su propia licencia:

| Componente | Uso | Licencia |
| --- | --- | --- |
| [normalize.css](https://necolas.github.io/normalize.css/) v3.0.2 | Estilos base | MIT |
| [LittleLink](https://littlelink.com) (Skeleton) | Estilos base y botones de marca | MIT |
| [Leaflet](https://leafletjs.com) 1.9.4 | Mapa interactivo (cargado desde unpkg) | BSD-2-Clause |
| [OpenStreetMap](https://www.openstreetmap.org/copyright) | Datos y teselas del mapa | ODbL, © colaboradores de OpenStreetMap |
| [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) 1.4.4 | Código QR (cargado desde cdnjs) | MIT |
| [Open Sans](https://fonts.google.com/specimen/Open+Sans) | Tipografía (Google Fonts) | SIL Open Font License 1.1 |

Los logotipos de Facebook, Instagram, TikTok y WhatsApp son marcas de sus respectivos dueños. Aquí se usan
solo para identificar los enlaces a esas plataformas.

## Licencia

© 2026 Bertha Estrada. **Todos los derechos reservados.**

El código, el diseño, los textos, las fotografías y los datos de este repositorio son propiedad de Bertha
Estrada. No se pueden copiar, modificar, distribuir ni reutilizar sin su autorización por escrito. Los
detalles están en [LICENSE](LICENSE). Los componentes de terceros conservan sus propias licencias (ver arriba).

Desarrollo: Alvaro Siles Estrada.
