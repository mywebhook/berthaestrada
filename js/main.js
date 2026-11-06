// Página de Bertha Estrada: idioma, tema y botones generados desde botones.json.
// Las secciones de alquiler (casas, habitaciones, reservas, pago) están en js/alquileres.js.

const TEXTOS = {
  es: {
    titulo: "Bertha Estrada | Alquiler de habitaciones y viviendas",
    hola: "¡Hola!",
    saludo: "Alquilo habitaciones y casas en cuatro propiedades. Mira lo disponible, consulta y reserva por WhatsApp.",
    estado: "Habitaciones disponibles",
    todos: "Todos los botones",
    genericos: "Botones genéricos",
    despliegue: "Botones de despliegue",
    desplegables: "Botones desplegables",
    grupoProfesional: "Accesos rápidos",
    grupoContacto: "Contacto",
    grupoRedes: "Redes sociales",
    grupoHerramientas: "Google y otras apps",
    grupoPagos: "Pagos y apoyo",
    grupoDespliegue: "Usa esta página",
    claro: "Cambiar a tema claro",
    oscuro: "Cambiar a tema oscuro",
    otroIdioma: "Switch to English",
    apoyoTitulo: "¡Gracias por tu apoyo!",
    apoyoTexto: "Cualquier monto ayuda y me motiva a seguir creando.",
    apoyoBolivia: "Desde Bolivia",
    apoyoMundo: "Otro país",
    apoyoQrAlt: "Código QR para enviar un aporte desde la app del banco",
    apoyoQrAyuda: "Escanéalo con la app de tu banco y elige el monto.",
    apoyoDescargar: "Descargar QR",
    apoyoCelular: "¿Estás en el celular? Descárgalo y ábrelo en tu app con \"Pagar con QR\".",
    apoyoKofiTexto: "Desde cualquier país, con tarjeta o PayPal, a través de Ko-fi.",
    apoyoKofi: "Invítame un café en Ko-fi",
    apoyoGracias: "¡Gracias! 💙",
    cerrar: "Cerrar",
    privacidad: "Política de privacidad",
    terminos: "Términos y condiciones",
    subir: "Volver arriba",
    hayMas: "Hay más abajo",
    compartir: "Compartir mi página",
    compartirTitulo: "Comparte mi página",
    compartirTexto: "Envía el enlace a quien busque dónde vivir.",
    compartirQrAlt: "Código QR de la página",
    compartirMensaje: "Habitaciones y casas en alquiler de Bertha Estrada:",
    copiarEnlace: "Copiar enlace",
    copiado: "¡Enlace copiado! 💙",
    masOpciones: "Más opciones",
    proximo: "próximamente",
    proximoTexto: "Todavía no tengo este enlace. Mientras tanto, escríbeme.",
    proximoAccion: "Escríbeme",
    proximoWhatsapp: "Hola Bertha, vi el botón de {nombre} en tu página.",
    abrirGrupo: "Mostrar",
    cerrarGrupo: "Ocultar",
    contratameTitulo: "¿Buscas dónde vivir?",
    contratameTexto: "Escríbeme y te cuento qué habitaciones o casas tengo disponibles.",
    contratameLugar: "Santa Cruz de la Sierra, Bolivia",
    contratameBusco: "Habitaciones y casas completas",
    contratameModalidad: "Alquiler mensual",
    contratameTecnologias: "Servicios",
    contratameWhatsapp: "Escríbeme por WhatsApp",
    contratameCorreo: "Enviar un correo",
    contratameCv: "Ver mi CV",
    contratameMensaje: "Hola Bertha, vi tu página y quiero consultar por una habitación en alquiler.",
    contratameAsunto: "Consulta de alquiler",
    contratameAyuda: "Toca para contactarme",
    ubicameTitulo: "¡Aquí me encuentras!",
    encuentranosTitulo: "¡Encuéntranos!",
    grupoTitulo: "¡Ubícanos!",
    grupoTodos: "Todos",
    grupoDireccion: "Nuestras {n} casas en Santa Cruz de la Sierra",
    grupoMensaje: "Estas son nuestras casas:",
    ubicameLugares: "Lugares",
    ubicameMapa: "Mapa de mi ubicación",
    ubicameHora: "En Santa Cruz son las {hora}",
    ubicameWhatsapp: "Compartir por WhatsApp",
    ubicameCopiar: "Copiar ubicación",
    ubicameCopiado: "¡Ubicación copiada! 📍",
    ubicameMensaje: "Esta es la ubicación de {lugar}:"
  },
  en: {
    titulo: "Bertha Estrada | Full Stack Developer",
    hola: "Hi!",
    saludo: "Here are my social networks so you can find them easily. It'll be a pleasure to connect with you! 🤝",
    estado: "Open to Work",
    todos: "All buttons",
    genericos: "Generic buttons",
    despliegue: "Deploy buttons",
    desplegables: "Dropdown buttons",
    grupoProfesional: "Work and projects",
    grupoContacto: "Contact",
    grupoRedes: "Social media",
    grupoHerramientas: "Google and other apps",
    grupoPagos: "Payments and support",
    grupoDespliegue: "Use this page",
    claro: "Switch to light theme",
    oscuro: "Switch to dark theme",
    otroIdioma: "Cambiar a español",
    apoyoTitulo: "Thanks for your support!",
    apoyoTexto: "Any amount helps and keeps me creating.",
    apoyoBolivia: "From Bolivia",
    apoyoMundo: "Other country",
    apoyoQrAlt: "QR code to send a contribution from a banking app",
    apoyoQrAyuda: "Scan it with your banking app and choose the amount.",
    apoyoDescargar: "Download QR",
    apoyoCelular: "On your phone? Download it and open it in your banking app with \"Pay with QR\".",
    apoyoKofiTexto: "From any country, by card or PayPal, through Ko-fi.",
    apoyoKofi: "Buy me a coffee on Ko-fi",
    apoyoGracias: "Thank you! 💙",
    cerrar: "Close",
    privacidad: "Privacy policy",
    terminos: "Terms and conditions",
    subir: "Back to top",
    hayMas: "More below",
    compartir: "Share my page",
    compartirTitulo: "Share my page",
    compartirTexto: "Scan the code or send the link to anyone who needs it.",
    compartirQrAlt: "QR code for this page",
    compartirMensaje: "Check out Bertha Estrada's page:",
    copiarEnlace: "Copy link",
    copiado: "Link copied! 💙",
    masOpciones: "More options",
    proximo: "coming soon",
    proximoTexto: "I don't have this link yet. In the meantime, message me.",
    proximoAccion: "Message me",
    proximoWhatsapp: "Hi Alvaro, I saw the {nombre} button on your page.",
    abrirGrupo: "Show",
    cerrarGrupo: "Hide",
    contratameTitulo: "Let's work together",
    contratameTexto: "Full Stack Developer with over 9 years of experience in web, mobile and infrastructure development.",
    contratameLugar: "Santa Cruz de la Sierra, Bolivia",
    contratameBusco: "Looking for: Full Stack Developer or Head of IT",
    contratameModalidad: "On-site or remote",
    contratameTecnologias: "Technologies",
    contratameWhatsapp: "Message me on WhatsApp",
    contratameCorreo: "Send an email",
    contratameCv: "See my resume",
    contratameMensaje: "Hi Alvaro, I saw your page and I'd like to talk to you about a job opportunity.",
    contratameAsunto: "Job opportunity",
    contratameAyuda: "Tap to see how to hire me",
    ubicameTitulo: "Here's where to find me!",
    encuentranosTitulo: "Come find us!",
    grupoTitulo: "Find us!",
    grupoTodos: "All",
    grupoDireccion: "Our {n} houses in Santa Cruz de la Sierra",
    grupoMensaje: "Here are our houses:",
    ubicameLugares: "Places",
    ubicameMapa: "Map of my location",
    ubicameHora: "It's {hora} in Santa Cruz",
    ubicameWhatsapp: "Share on WhatsApp",
    ubicameCopiar: "Copy location",
    ubicameCopiado: "Location copied! 📍",
    ubicameMensaje: "Here's the location of {lugar}:"
  }
};

// Íconos en SVG: los emojis de bandera no se ven en Windows (salen como "ES"/"US")
const ICONOS = {
  es: `<svg class="bandera" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#c60b1e"/><rect y=".5" width="3" height="1" fill="#ffc400"/></svg>`,
  en: `<svg class="bandera" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#fff"/><path d="M15 0v20" stroke="#b22234" stroke-width="30" stroke-dasharray="1.5385"/><rect width="12" height="10.77" fill="#3c3b6e"/></svg>`,
  sol: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  luna: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`
};

const GRUPOS_GITHUB = ["github", "githubRepo"];

// Vista previa (preview.html abre index.html?preview=1): en vez de los archivos se usa lo que
// admin.html dejó en localStorage, con los cambios todavía sin guardar.
const BORRADOR = (() => {
  if (!new URLSearchParams(location.search).has("preview")) return null;
  try { return JSON.parse(localStorage.getItem("admin-borrador")); } catch (e) { return null; }
})();

// localStorage puede fallar en modo privado; la página funciona igual sin él
const leer = (clave) => { try { return localStorage.getItem(clave); } catch (e) { return null; } };
const guardar = (clave, valor) => { try { localStorage.setItem(clave, valor); } catch (e) { } };

let lang = leer("social-lang") ||
  ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
if (!TEXTOS[lang]) lang = "es";

// Solo los botones con "textoEn" cambian de idioma (los de GitHub los reemplaza buttons.js)
const botonesTraducibles = [];
const textoBoton = (b) => (lang === "en" && b.textoEn) || b.texto;
// "hrefEn" es opcional: por ejemplo, el mensaje de WhatsApp de "Pagos" en inglés
const enlaceBoton = (b) => (lang === "en" && b.hrefEn) || b.href;
const temaActual = () => document.documentElement.dataset.theme;
const sinAnimacion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- Idioma y tema ---------- */

function aplicarIdioma() {
  const t = TEXTOS[lang];
  document.documentElement.lang = lang;
  document.title = t.titulo;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t[el.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t[el.dataset.i18nTitle];
  });
  document.querySelectorAll("[data-cerrar]").forEach((el) => {
    el.setAttribute("aria-label", t.cerrar);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t[el.dataset.i18nAria]);
  });
  const btnDisponible = document.getElementById("btn-disponible");
  if (btnDisponible) btnDisponible.dataset.descripcion = t.contratameAyuda;
  // El botón muestra la bandera del idioma al que se cambia, no del actual
  const btnIdioma = document.getElementById("btn-idioma");
  btnIdioma.innerHTML = ICONOS[lang === "es" ? "en" : "es"];
  btnIdioma.setAttribute("aria-label", t.otroIdioma);
  btnIdioma.dataset.descripcion = t.otroIdioma;
  // Con la pista "giro" el botón también sirve para bajar: data-i18n-aria dice cuál texto toca
  const btnSubir = document.getElementById("btn-subir");
  if (btnSubir) btnSubir.dataset.descripcion = t[btnSubir.dataset.i18nAria] || t.subir;
  const btnCompartir = document.getElementById("btn-compartir");
  if (btnCompartir) {
    btnCompartir.setAttribute("aria-label", t.compartir);
    btnCompartir.dataset.descripcion = t.compartir;
  }
  botonesTraducibles.forEach(({ a, nodo, b }) => {
    nodo.textContent = textoBoton(b);
    if (b.hrefEn) a.href = enlaceBoton(b);
  });
  // El CV se abre en el mismo idioma que la página
  document.querySelectorAll("a[data-con-idioma]").forEach((a) => {
    a.href = `${a.dataset.conIdioma}?lang=${lang}`;
  });
  pintarBotonTema();
  if (elementoAyuda) mostrarAyuda(elementoAyuda);
}

function pintarBotonTema() {
  const t = TEXTOS[lang];
  const claro = temaActual() === "light";
  const btn = document.getElementById("btn-tema");
  // En oscuro se ve el sol (para pasar a claro) y en claro la luna
  btn.innerHTML = claro ? ICONOS.luna : ICONOS.sol;
  btn.setAttribute("aria-label", claro ? t.oscuro : t.claro);
  btn.dataset.descripcion = claro ? t.oscuro : t.claro;
  // Si el mensaje está a la vista, se actualiza con el texto nuevo
  if (elementoAyuda === btn) mostrarAyuda(btn);
}

// Deben coincidir con las animaciones idioma-salir / idioma-entrar de css/index.css
const DURACION_SALIDA = 220;
const DURACION_ENTRADA = 450;
let temporizadorIdioma;

document.getElementById("btn-idioma").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  guardar("social-lang", lang);
  if (sinAnimacion.matches) {
    aplicarIdioma();
    return;
  }
  // El texto sale, se cambia mientras no se ve y entra con el idioma nuevo
  const raiz = document.documentElement;
  clearTimeout(temporizadorIdioma);
  raiz.classList.remove("idioma-entra");
  raiz.classList.add("idioma-sale");
  temporizadorIdioma = setTimeout(() => {
    aplicarIdioma();
    raiz.classList.replace("idioma-sale", "idioma-entra");
    temporizadorIdioma = setTimeout(() => raiz.classList.remove("idioma-entra"), DURACION_ENTRADA);
  }, DURACION_SALIDA);
});

// Debe coincidir con la transición de .cambiando-tema en css/index.css
const DURACION_TEMA = 400;
let temporizadorTema;

document.getElementById("btn-tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  const nuevo = temaActual() === "light" ? "dark" : "light";
  if (!sinAnimacion.matches) {
    // Los colores pasan suave solo durante el cambio, para no frenar los hover
    raiz.classList.add("cambiando-tema");
    clearTimeout(temporizadorTema);
    temporizadorTema = setTimeout(() => raiz.classList.remove("cambiando-tema"), DURACION_TEMA);
  }
  raiz.dataset.theme = nuevo;
  guardar("social-theme", nuevo);
  pintarBotonTema();
  if (!sinAnimacion.matches) {
    document.querySelector("#btn-tema svg").classList.add("girando");
  }
});

/* ---------- Botones ---------- */

function crearBotonGithub(b) {
  const a = document.createElement("a");
  a.className = "github-button";
  a.href = b.href;
  a.textContent = b.texto;
  if (b.icono) a.dataset.icon = b.icono;
  if (b.tamano) a.dataset.size = b.tamano;
  if (b.mostrarContador) a.dataset.showCount = "true";
  if (b.ariaLabel) a.setAttribute("aria-label", b.ariaLabel);
  // GitHub pinta sus botones según el tema activo al cargar la página
  if (temaActual() === "light") {
    a.dataset.colorScheme = "no-preference: light; light: light; dark: light;";
  } else if (b.esquemaColor) {
    a.dataset.colorScheme = b.esquemaColor;
  }
  return a;
}

// Botones que son una imagen entera, como las insignias "Deploy to Vercel": el texto va en el alt
function crearInsignia(b) {
  const a = document.createElement("a");
  a.className = "boton-insignia";
  a.href = b.href;
  if (b.target) a.target = b.target;
  if (b.rel) a.rel = b.rel;
  const img = document.createElement("img");
  img.src = b.imagen;
  img.alt = b.texto;
  a.appendChild(img);
  if (b.descripcion) a.dataset.descripcion = b.descripcion;
  if (b.descripcionEn) a.dataset.descripcionEn = b.descripcionEn;
  avisarSiNoTieneEnlace(a, () => b.texto);
  return a;
}

// Los botones que todavía van a la 404 muestran el aviso "Próximamente" en su lugar.
// El href a 404.html queda por si el JavaScript falla.
function avisarSiNoTieneEnlace(a, nombre) {
  if (a.getAttribute("href") !== "404.html") return;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarProximamente(nombre());
  });
}

// Botón que al tocarlo despliega un mensaje y otra lista de botones ("botones" en el JSON).
// El mensaje y el texto del botón cambian de idioma igual que los botones con "textoEn".
function crearDesplegable(b) {
  const caja = document.createElement("div");
  caja.className = "desplegable";

  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = b.clase;
  const idPanel = `desplegable-${b.nombre}`;
  boton.setAttribute("aria-expanded", "false");
  boton.setAttribute("aria-controls", idPanel);
  if (b.icono) {
    const img = document.createElement("img");
    img.className = "icon";
    img.src = b.icono;
    img.alt = "";
    boton.appendChild(img);
  }
  const texto = document.createTextNode(textoBoton(b));
  boton.appendChild(texto);
  boton.insertAdjacentHTML("beforeend",
    `<svg class="flecha" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`);
  if (b.descripcion) boton.dataset.descripcion = b.descripcion;
  if (b.descripcionEn) boton.dataset.descripcionEn = b.descripcionEn;

  const panel = document.createElement("div");
  panel.className = "desplegable-panel";
  panel.id = idPanel;
  panel.hidden = true;
  const mensaje = document.createElement("p");
  const textoMensaje = document.createTextNode("");
  mensaje.appendChild(textoMensaje);
  const lista = document.createElement("div");
  lista.className = "desplegable-lista";
  b.botones.forEach((hijo) => lista.append(crearBoton(hijo), " "));
  panel.append(mensaje, lista);

  // Se registran como traducibles: el mensaje usa "mensaje"/"mensajeEn" en lugar de "texto"/"textoEn"
  if (b.textoEn) botonesTraducibles.push({ a: boton, nodo: texto, b });
  const datosMensaje = { texto: b.mensaje, textoEn: b.mensajeEn };
  textoMensaje.textContent = textoBoton(datosMensaje);
  if (b.mensajeEn) botonesTraducibles.push({ a: mensaje, nodo: textoMensaje, b: datosMensaje });

  boton.addEventListener("click", () => {
    const abrir = boton.getAttribute("aria-expanded") !== "true";
    boton.setAttribute("aria-expanded", String(abrir));
    panel.hidden = !abrir;
  });

  caja.append(boton, panel);
  return caja;
}

function crearBoton(b) {
  if (b.imagen) return crearInsignia(b);
  if (b.botones) return crearDesplegable(b);
  const a = document.createElement("a");
  a.className = b.clase;
  a.href = enlaceBoton(b);
  if (b.conIdioma) {
    a.dataset.conIdioma = b.href;
    a.href = `${b.href}?lang=${lang}`;
  }
  if (b.target) a.target = b.target;
  if (b.rel) a.rel = b.rel;
  if (b.icono) {
    const img = document.createElement("img");
    img.className = "icon";
    img.src = b.icono;
    img.alt = b.alt || b.nombre || "";
    a.appendChild(img);
  }
  const texto = document.createTextNode(textoBoton(b));
  a.appendChild(texto);
  // Mensaje de ayuda que aparece al pasar el mouse (ver "Mensajes de ayuda")
  if (b.descripcion) a.dataset.descripcion = b.descripcion;
  if (b.descripcionEn) a.dataset.descripcionEn = b.descripcionEn;
  if (b.textoEn) {
    // Solo los botones que cambian de texto giran al cambiar de idioma
    a.classList.add("traducible");
    botonesTraducibles.push({ a, nodo: texto, b });
  }
  avisarSiNoTieneEnlace(a, () => textoBoton(b));
  // "accion": "apoyo" abre la ventana de apoyo; si no existe en la página, el enlace funciona normal
  if (b.accion === "apoyo" && ventanaApoyo) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      abrirApoyo();
    });
  }
  // "accion": "contratame" abre la ventana "Contrátame"; sin ella, el enlace (un correo) funciona normal
  if (b.accion === "contratame" && ventanaContratame) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      abrirContratame();
    });
  }
  // "accion": "ubicame", "encuentranos" o "grupo" abre la ventana con el mapa de sus "lugares";
  // sin ella (o sin lugares), el enlace a Google Maps funciona normal
  const lugares = typeof b.lugares === "string" ? lugaresPorBoton[b.lugares] : b.lugares;
  if (["ubicame", "encuentranos", "grupo"].includes(b.accion) && lugares?.length && ventanaUbicame) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      abrirUbicame(lugares, b.accion);
    });
  }
  return a;
}

function cargarBotonesGithub() {
  // buttons.js se carga después de crear los botones para que los detecte
  const script = document.createElement("script");
  script.src = "https://buttons.github.io/buttons.js";
  script.async = true;
  document.body.appendChild(script);
}

async function cargarBotones() {
  // Cada página indica su JSON con <body data-botones="...">; por defecto, botones.json
  const archivo = document.body.dataset.botones || "botones.json";
  try {
    const grupos = BORRADOR ? BORRADOR.botones : await (await fetch(archivo)).json();
    // Antes de crear los botones, para que uno pueda usar los "lugares" de otro por su nombre
    Object.values(grupos).flat().forEach((b) => {
      if (Array.isArray(b.lugares)) lugaresPorBoton[b.nombre] = b.lugares;
    });
    let posicion = 0;
    for (const [grupo, botones] of Object.entries(grupos)) {
      const contenedor = document.getElementById(grupo);
      if (!contenedor) continue;
      const crear = GRUPOS_GITHUB.includes(grupo) ? crearBotonGithub : crearBoton;
      for (const b of botones) {
        const boton = crear(b);
        // Posición para que entren uno tras otro (ver .entrada en css/index.css)
        boton.style.setProperty("--i", posicion++);
        contenedor.append(boton, " ");
      }
    }
    cargarBotonesGithub();
    contarBotonesDeGrupos();
    terminarEntrada(posicion);
  } catch (err) {
    console.error(`No se pudo cargar ${archivo}`, err);
    terminarEntrada(0);
  }
}

// Quita .entrada cuando el último botón ya apareció, para que las animaciones
// de entrada no se repitan ni choquen con las del cambio de idioma.
// Los tiempos salen de .entrada en css/index.css: 0,3 s + 0,04 s por botón + 0,5 s.
function terminarEntrada(cantidadBotones) {
  const espera = 300 + cantidadBotones * 40 + 500;
  setTimeout(() => document.documentElement.classList.remove("entrada"), Math.max(espera, 1200));
}

/* ---------- Ventana "Apóyame" ---------- */

const ventanaApoyo = document.getElementById("apoyo");
const CORAZON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>`;
const COLORES_CORAZON = ["#ff4d8d", "#8b5cf6", "#2457f5", "#00c6ff", "#ff5e5b"];

// Lanza corazones de colores (u otra "forma", como los pines de Ubícame) desde el centro de un elemento.
// Van dentro de la ventana abierta ("capa"): una ventana abierta tapa todo lo que está en <body>.
function lanzarCorazones(origen, cantidad = 16, capa = ventanaApoyo, forma = CORAZON) {
  if (sinAnimacion.matches) return;
  const r = origen.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  for (let i = 0; i < cantidad; i++) {
    const c = document.createElement("span");
    c.className = "corazon-volador";
    c.innerHTML = forma;
    // Hacia arriba en abanico, con distancia, tamaño y giro al azar
    const angulo = (-90 + (Math.random() - 0.5) * 160) * (Math.PI / 180);
    const distancia = 70 + Math.random() * 110;
    c.style.cssText = `left:${x}px;top:${y}px;color:${COLORES_CORAZON[i % COLORES_CORAZON.length]};` +
      `--dx:${Math.cos(angulo) * distancia}px;--dy:${Math.sin(angulo) * distancia}px;` +
      `--giro:${(Math.random() - 0.5) * 80}deg;--tam:${12 + Math.random() * 14}px;--dur:${0.9 + Math.random() * 0.6}s`;
    c.addEventListener("animationend", () => c.remove());
    capa.appendChild(c);
  }
}

function elegirPestana(nombre, enfocar = false) {
  const pestanas = ventanaApoyo.querySelector(".apoyo-pestanas");
  pestanas.dataset.activa = nombre;
  pestanas.querySelectorAll("[role=tab]").forEach((tab) => {
    const activa = tab.dataset.pestana === nombre;
    tab.setAttribute("aria-selected", String(activa));
    tab.tabIndex = activa ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !activa;
    if (activa && enfocar) tab.focus();
  });
}

// Deben coincidir con apoyo-abrir / apoyo-cerrar de css/index.css
const DURACION_APERTURA = 500;
const DURACION_CIERRE = 200;

function abrirApoyo() {
  // Si la zona horaria es de Bolivia se abre en el QR; si no, en Ko-fi
  const enBolivia = Intl.DateTimeFormat().resolvedOptions().timeZone === "America/La_Paz";
  elegirPestana(enBolivia ? "bolivia" : "mundo");
  ventanaApoyo.classList.remove("cerrando");
  ventanaApoyo.showModal();
  // Cuando la ventana termina de aparecer, el corazón de arriba suelta corazones
  // (antes no: mientras se anima, la ventana recortaría los corazones)
  setTimeout(() => {
    if (ventanaApoyo.open) lanzarCorazones(ventanaApoyo.querySelector(".apoyo-corazon"), 18);
  }, DURACION_APERTURA);
}

function cerrarApoyo() {
  if (sinAnimacion.matches) {
    ventanaApoyo.close();
    return;
  }
  ventanaApoyo.classList.add("cerrando");
  setTimeout(() => {
    ventanaApoyo.close();
    ventanaApoyo.classList.remove("cerrando");
  }, DURACION_CIERRE);
}

if (ventanaApoyo) {
  ventanaApoyo.querySelector("[data-cerrar]").addEventListener("click", cerrarApoyo);
  // Clic fuera del contenido (en el fondo oscuro) cierra la ventana
  ventanaApoyo.addEventListener("click", (e) => {
    if (e.target === ventanaApoyo) cerrarApoyo();
  });
  // Escape: se cierra con la misma animación
  ventanaApoyo.addEventListener("cancel", (e) => {
    e.preventDefault();
    cerrarApoyo();
  });

  const tabs = [...ventanaApoyo.querySelectorAll("[role=tab]")];
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => elegirPestana(tab.dataset.pestana));
    // Flechas izquierda/derecha para moverse entre pestañas con el teclado
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const siguiente = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      elegirPestana(siguiente.dataset.pestana, true);
    });
  });

  // Al descargar el QR o ir a Ko-fi: corazones y un "¡Gracias!" por un momento
  ventanaApoyo.querySelectorAll("[data-gracias]").forEach((accion) => {
    const texto = accion.querySelector("[data-i18n]");
    accion.addEventListener("click", () => {
      lanzarCorazones(accion, 22);
      texto.textContent = TEXTOS[lang].apoyoGracias;
      setTimeout(() => { texto.textContent = TEXTOS[lang][texto.dataset.i18n]; }, 2200);
    });
  });
}

/* ---------- Mensajes de ayuda ---------- */

// Un solo globo para toda la página: se mueve al botón con data-descripcion que se apunta.
// Va en <body> con position: fixed para que no lo recorte el overflow: hidden de "Apóyame".
const globoAyuda = document.createElement("div");
globoAyuda.className = "globo-ayuda";
globoAyuda.id = "globo-ayuda";
globoAyuda.setAttribute("role", "tooltip");
document.body.appendChild(globoAyuda);
let elementoAyuda = null;
const MARGEN_AYUDA = 8;      // distancia mínima al borde de la ventana
const SEPARACION_LADO = 20;  // entre el botón y el texto al costado
const SEPARACION_GLOBO = 10; // entre el botón y el globo arriba/abajo
const ANCHO_MIN_LADO = 180;  // con menos espacio al costado, se usa el globo
const ANCHO_MAX_LADO = 340;
const ANCHO_MIN_BOTON_LADO = 120; // botones más angostos (íconos) usan el globo

const textoAyuda = (el) => (lang === "en" && el.dataset.descripcionEn) || el.dataset.descripcion;

function mostrarAyuda(el) {
  const texto = textoAyuda(el);
  if (!texto) return;
  if (elementoAyuda && elementoAyuda !== el) elementoAyuda.removeAttribute("aria-describedby");
  elementoAyuda = el;
  el.setAttribute("aria-describedby", globoAyuda.id);
  globoAyuda.textContent = texto;
  // Al costado del botón (derecha, o izquierda si no entra).
  // Sale como globo arriba o abajo en pantallas angostas, y siempre en los íconos chicos
  // (fila de redes, botones de la esquina): al costado taparía a los íconos vecinos.
  const r = el.getBoundingClientRect();
  const libreDerecha = innerWidth - r.right - SEPARACION_LADO - MARGEN_AYUDA;
  const libreIzquierda = r.left - SEPARACION_LADO - MARGEN_AYUDA;
  const iconoChico = r.width < ANCHO_MIN_BOTON_LADO;
  let lado = iconoChico ? null
    : libreDerecha >= ANCHO_MIN_LADO ? "derecha"
    : libreIzquierda >= ANCHO_MIN_LADO ? "izquierda" : null;
  const libre = lado === "derecha" ? libreDerecha : libreIzquierda;
  globoAyuda.style.maxWidth = lado ? `${Math.min(ANCHO_MAX_LADO, libre)}px` : "";
  globoAyuda.dataset.lado = lado || "arriba";
  // offsetWidth/offsetHeight no cambian con la animación de entrada, getBoundingClientRect sí
  const ancho = globoAyuda.offsetWidth;
  const alto = globoAyuda.offsetHeight;
  let top;
  let left;
  if (lado) {
    left = lado === "derecha" ? r.right + SEPARACION_LADO : r.left - SEPARACION_LADO - ancho;
    top = Math.max(MARGEN_AYUDA, Math.min(r.top + r.height / 2 - alto / 2, innerHeight - alto - MARGEN_AYUDA));
  } else {
    if (r.top - alto - SEPARACION_GLOBO < MARGEN_AYUDA) lado = "abajo";
    globoAyuda.dataset.lado = lado || "arriba";
    top = lado === "abajo" ? r.bottom + SEPARACION_GLOBO : r.top - alto - SEPARACION_GLOBO;
    left = Math.max(MARGEN_AYUDA, Math.min(r.left + r.width / 2 - ancho / 2, innerWidth - ancho - MARGEN_AYUDA));
    // La flechita apunta al centro del botón aunque el globo se haya corrido por el borde
    globoAyuda.style.setProperty("--flecha", `${r.left + r.width / 2 - left}px`);
  }
  globoAyuda.style.top = `${top}px`;
  globoAyuda.style.left = `${left}px`;
  // Se oculta de golpe (sin transición) y se vuelve a mostrar, para que el texto
  // entre deslizándose en cada botón y no salte de uno a otro
  globoAyuda.style.transition = "none";
  globoAyuda.classList.remove("visible");
  void globoAyuda.offsetWidth;
  globoAyuda.style.transition = "";
  globoAyuda.classList.add("visible");
}

function ocultarAyuda() {
  if (!elementoAyuda) return;
  elementoAyuda.removeAttribute("aria-describedby");
  elementoAyuda = null;
  globoAyuda.classList.remove("visible");
}

// En pantallas táctiles no se muestra: el toque ya abre el enlace
document.addEventListener("pointerover", (e) => {
  if (e.pointerType === "touch") return;
  const el = e.target.closest("[data-descripcion]");
  if (el && el !== elementoAyuda) mostrarAyuda(el);
});
document.addEventListener("pointerout", (e) => {
  if (elementoAyuda && !elementoAyuda.contains(e.relatedTarget)) ocultarAyuda();
});
// Con teclado (Tab) también aparece
document.addEventListener("focusin", (e) => {
  const el = e.target.closest("[data-descripcion]");
  if (el && el.matches(":focus-visible")) mostrarAyuda(el);
});
document.addEventListener("focusout", ocultarAyuda);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") ocultarAyuda();
});
// Al desplazar, el globo quedaría flotando lejos del botón
window.addEventListener("scroll", ocultarAyuda, { passive: true });
// Al hacer clic ya se sabe para qué era: así no queda a la vista al volver de otra pestaña
document.addEventListener("click", ocultarAyuda);

/* ---------- Ventana "Contrátame" ---------- */

const ventanaContratame = document.getElementById("contratame");

function abrirContratame() {
  const t = TEXTOS[lang];
  // Los mensajes ya escritos van en el idioma de la página
  document.getElementById("contratame-whatsapp").href =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(t.contratameMensaje)}`;
  ventanaContratame.classList.remove("cerrando");
  ventanaContratame.showModal();
}

function cerrarContratame() {
  if (sinAnimacion.matches) {
    ventanaContratame.close();
    return;
  }
  ventanaContratame.classList.add("cerrando");
  setTimeout(() => {
    ventanaContratame.close();
    ventanaContratame.classList.remove("cerrando");
  }, DURACION_CIERRE);
}

if (ventanaContratame) {
  document.getElementById("btn-disponible").addEventListener("click", abrirContratame);
  ventanaContratame.querySelector("[data-cerrar]").addEventListener("click", cerrarContratame);
  ventanaContratame.addEventListener("click", (e) => {
    if (e.target === ventanaContratame) cerrarContratame();
  });
  ventanaContratame.addEventListener("cancel", (e) => {
    e.preventDefault();
    cerrarContratame();
  });
}

/* ---------- Ventana "Ubícame" / "Encuéntranos" / "Grupo de ubicaciones" ---------- */

// Cada lugar de "lugares" en botones.json: { nombre, nombreEn?, direccion?, direccionEn?, lat, lng, zoom? }.
// "lugares" también puede ser el "nombre" de otro botón, para usar los mismos lugares sin repetirlos.
const ventanaUbicame = document.getElementById("ubicame");
const PIN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>`;
// "accion": "grupo" pone todos los lugares juntos en un mapa de Leaflet con OpenStreetMap:
// el mapa de Google embebido solo muestra un punto si no se usa una clave de API.
const LEAFLET = "https://unpkg.com/leaflet@1.9.4/dist/";
const lugaresPorBoton = {};
// "lugares": "casas" usa las casas de js/config.js que tengan lat y lng (así no se repiten en botones.json)
lugaresPorBoton.casas = ((window.CONFIG_ALQUILER && window.CONFIG_ALQUILER.casas) || [])
  .filter((c) => c.lat != null && c.lng != null)
  .map((c) => ({ nombre: c.nombre, direccion: c.zona, lat: c.lat, lng: c.lng, zoom: 17, id: c.id }));
let lugaresAbiertos = [];
let lugarActual = null; // null = todos los lugares (solo en el grupo)
let modoGrupo = false;
let mapaGrupo = null;
let capaPines = null;

const nombreLugar = (l) => (lang === "en" && l.nombreEn) || l.nombre;
const direccionLugar = (l) => (lang === "en" && l.direccionEn) || l.direccion || TEXTOS[lang].contratameLugar;
const enlaceLugar = (l) => `https://www.google.com/maps?q=${l.lat},${l.lng}&z=${l.zoom || 17}`;
// Google Maps arma una ruta que pasa por todos los puntos
const enlaceTodos = (lugares) => `https://www.google.com/maps/dir/${lugares.map((l) => `${l.lat},${l.lng}`).join("/")}`;

// Todos los lugares con su enlace, para WhatsApp y para copiar
const textoTodos = () => [TEXTOS[lang].grupoMensaje,
  ...lugaresAbiertos.map((l, i) => `${i + 1}. ${nombreLugar(l)}: ${enlaceLugar(l)}`)].join("\n");

function elegirLugar(l) {
  const t = TEXTOS[lang];
  lugarActual = l;
  document.getElementById("ubicame-direccion").textContent =
    l ? direccionLugar(l) : t.grupoDireccion.replace("{n}", lugaresAbiertos.length);
  if (modoGrupo) moverMapaGrupo(l);
  else mostrarEnGoogle(l);
  // Waze solo navega a un punto: con "Todos" se oculta
  document.querySelector(".ubicame-acciones").classList.toggle("sin-waze", !l);
  document.getElementById("ubicame-google").href = l ? `${enlaceLugar(l)}&hl=${lang}` : enlaceTodos(lugaresAbiertos);
  if (l) document.getElementById("ubicame-waze").href = `https://waze.com/ul?ll=${l.lat},${l.lng}&navigate=yes`;
  document.getElementById("ubicame-whatsapp").href = `https://wa.me/?text=${encodeURIComponent(l
    ? `${t.ubicameMensaje.replace("{lugar}", nombreLugar(l))} ${enlaceLugar(l)}`
    : textoTodos())}`;
  document.querySelectorAll(".ubicame-lugar").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.lugar === l));
  });
}

const centrarChip = () => document.querySelector(".ubicame-lugar[aria-pressed=true]")
  ?.scrollIntoView({ block: "nearest", inline: "center", behavior: sinAnimacion.matches ? "auto" : "smooth" });

// Un solo punto: el mapa de Google. Con un brillo mientras carga; si es el mismo mapa no se vuelve a pedir.
function mostrarEnGoogle(l) {
  const iframe = document.getElementById("ubicame-iframe");
  const mapa = `https://www.google.com/maps?q=${l.lat},${l.lng}&z=${(l.zoom || 17) - 1}&hl=${lang}&output=embed`;
  if (iframe.dataset.src !== mapa) {
    iframe.dataset.src = mapa;
    delete iframe.dataset.cargado;
    iframe.src = mapa;
  }
  iframe.parentElement.classList.toggle("cargado", iframe.dataset.cargado === "1");
}

let promesaLeaflet = null;

function cargarLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  promesaLeaflet ??= new Promise((listo, fallo) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `${LEAFLET}leaflet.css`;
    const js = document.createElement("script");
    js.src = `${LEAFLET}leaflet.js`;
    js.onload = () => listo(window.L);
    js.onerror = () => {
      promesaLeaflet = null;
      fallo();
    };
    document.head.append(css, js);
  });
  return promesaLeaflet;
}

// Todos los puntos juntos: Leaflet se pide recién la primera vez que se abre el grupo
async function mostrarGrupo() {
  const caja = document.getElementById("ubicame-grupo");
  const marco = caja.parentElement;
  let L;
  try {
    L = await cargarLeaflet();
  } catch (e) {
    // Sin Leaflet (sin internet o bloqueado): el mapa de Google con el primer lugar
    modoGrupo = false;
    marco.classList.remove("en-grupo");
    elegirLugar(lugaresAbiertos[0]);
    return;
  }
  if (!ventanaUbicame.open || !modoGrupo) return;
  if (!mapaGrupo) {
    mapaGrupo = L.map(caja, { scrollWheelZoom: false });
    capaPines = L.layerGroup().addTo(mapaGrupo);
  }
  mapaGrupo.invalidateSize();
  // Los pines se vuelven a crear en cada apertura, así caen de nuevo uno tras otro
  capaPines.clearLayers();
  lugaresAbiertos.forEach((l, i) => {
    const icono = L.divIcon({
      className: "pin-grupo",
      html: `<span style="--i:${i}">${i + 1}</span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 39]
    });
    const pin = L.marker([l.lat, l.lng], { icon: icono, title: nombreLugar(l), alt: nombreLugar(l) })
      .bindTooltip(nombreLugar(l), { direction: "top", offset: [0, -36] })
      .on("click", () => {
        elegirLugar(l);
        centrarChip();
      })
      .addTo(capaPines);
    pin.lugar = l;
  });
  moverMapaGrupo(lugarActual, false);
  // Las baldosas se agregan después de ubicar el mapa: Leaflet necesita saber dónde está para pedirlas
  if (!caja.dataset.cargado) {
    caja.dataset.cargado = "pidiendo";
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).once("load", () => {
      caja.dataset.cargado = "1";
      marco.classList.add("cargado");
    }).addTo(mapaGrupo);
  }
  marco.classList.toggle("cargado", caja.dataset.cargado === "1");
}

// Vuela hasta el lugar elegido, o muestra todos con "Todos". El pin elegido se agranda y queda arriba.
function moverMapaGrupo(l, animar = !sinAnimacion.matches) {
  if (!mapaGrupo || !ventanaUbicame.open) return;
  const opciones = { animate: animar, duration: 0.8 };
  if (l) mapaGrupo.flyTo([l.lat, l.lng], l.zoom || 16, opciones);
  else mapaGrupo.flyToBounds(lugaresAbiertos.map((x) => [x.lat, x.lng]), { ...opciones, padding: [36, 36], maxZoom: 16 });
  capaPines.eachLayer((pin) => {
    pin.getElement()?.classList.toggle("elegido", pin.lugar === l);
    pin.setZIndexOffset(pin.lugar === l ? 1000 : 0);
  });
}

function abrirUbicame(lugares, accion, inicial = null) {
  const t = TEXTOS[lang];
  lugaresAbiertos = lugares;
  modoGrupo = accion === "grupo";
  const marco = document.querySelector(".ubicame-mapa");
  marco.classList.toggle("en-grupo", modoGrupo);
  if (modoGrupo) marco.classList.toggle("cargado", document.getElementById("ubicame-grupo").dataset.cargado === "1");
  const titulo = document.getElementById("ubicame-titulo");
  titulo.dataset.i18n = `${accion}Titulo`;
  titulo.textContent = t[titulo.dataset.i18n];
  // Chips para cambiar de lugar: con más de un lugar, y en el grupo además "Todos" y los números de los pines
  const opciones = modoGrupo ? [null, ...lugares] : lugares.length > 1 ? lugares : [];
  const chips = document.getElementById("ubicame-lugares");
  chips.hidden = !opciones.length;
  chips.replaceChildren(...opciones.map((l, i) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ubicame-lugar";
    chip.lugar = l;
    if (modoGrupo && l) {
      chip.insertAdjacentHTML("beforeend", `<span class="ubicame-numero" aria-hidden="true">${i}</span>`);
    } else {
      chip.innerHTML = PIN;
    }
    chip.append(l ? nombreLugar(l) : t.grupoTodos);
    chip.addEventListener("click", () => {
      elegirLugar(l);
      centrarChip();
    });
    return chip;
  }));
  chips.scrollLeft = 0;
  elegirLugar(modoGrupo ? inicial : lugares[0]);
  // La hora de allá, con sol o luna según sea de día o de noche
  const ahora = new Date();
  const hora = new Intl.DateTimeFormat(lang, { timeZone: "America/La_Paz", hour: "2-digit", minute: "2-digit" }).format(ahora);
  const horaNumero = Number(new Intl.DateTimeFormat("en", { timeZone: "America/La_Paz", hour: "numeric", hourCycle: "h23" }).format(ahora));
  document.getElementById("ubicame-hora").textContent =
    `${horaNumero >= 6 && horaNumero < 19 ? "☀️" : "🌙"} ${t.ubicameHora.replace("{hora}", hora)}`;
  ventanaUbicame.classList.remove("cerrando");
  ventanaUbicame.showModal();
  // Leaflet mide el mapa: tiene que estar a la vista
  if (modoGrupo) mostrarGrupo();
}

function cerrarUbicame() {
  if (sinAnimacion.matches) {
    ventanaUbicame.close();
    return;
  }
  ventanaUbicame.classList.add("cerrando");
  setTimeout(() => {
    ventanaUbicame.close();
    ventanaUbicame.classList.remove("cerrando");
  }, DURACION_CIERRE);
}

if (ventanaUbicame) {
  ventanaUbicame.querySelector("[data-cerrar]").addEventListener("click", cerrarUbicame);
  ventanaUbicame.addEventListener("click", (e) => {
    if (e.target === ventanaUbicame) cerrarUbicame();
  });
  ventanaUbicame.addEventListener("cancel", (e) => {
    e.preventDefault();
    cerrarUbicame();
  });

  const iframe = document.getElementById("ubicame-iframe");
  iframe.addEventListener("load", () => {
    if (!iframe.src) return;
    iframe.dataset.cargado = "1";
    if (!modoGrupo) iframe.parentElement.classList.add("cargado");
  });

  // Copiar ubicación: pines volando y "¡Ubicación copiada!" por un momento
  const copiar = document.getElementById("ubicame-copiar");
  const textoCopiar = copiar.querySelector("[data-i18n]");
  copiar.addEventListener("click", async () => {
    const enlace = lugarActual ? enlaceLugar(lugarActual) : textoTodos();
    try {
      await navigator.clipboard.writeText(enlace);
    } catch (e) {
      const campo = document.createElement("textarea");
      campo.value = enlace;
      ventanaUbicame.appendChild(campo);
      campo.select();
      document.execCommand("copy");
      campo.remove();
    }
    lanzarCorazones(copiar, 18, ventanaUbicame, PIN);
    textoCopiar.textContent = TEXTOS[lang].ubicameCopiado;
    copiar.classList.add("copiado");
    setTimeout(() => {
      textoCopiar.textContent = TEXTOS[lang].ubicameCopiar;
      copiar.classList.remove("copiado");
    }, 2200);
  });
}

/* ---------- Grupos plegables ---------- */

// Los títulos con data-plegable (index.html) se vuelven un botón que abre y cierra su grupo,
// con la cantidad de botones al lado. Al abrir, los botones entran uno tras otro.
const FLECHA_GRUPO = `<svg class="flecha" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

document.querySelectorAll(".titulo-grupo[data-plegable]").forEach((titulo) => {
  const grupo = titulo.nextElementSibling;
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "titulo-boton";
  boton.setAttribute("aria-controls", grupo.id);
  boton.append(...titulo.childNodes);
  const contador = document.createElement("span");
  contador.className = "contador";
  boton.append(contador);
  boton.insertAdjacentHTML("beforeend", FLECHA_GRUPO);
  titulo.appendChild(boton);

  const abierto = titulo.dataset.plegable !== "cerrado";
  boton.setAttribute("aria-expanded", String(abierto));
  grupo.hidden = !abierto;

  let temporizador;
  boton.addEventListener("click", () => {
    const abrir = boton.getAttribute("aria-expanded") !== "true";
    boton.setAttribute("aria-expanded", String(abrir));
    grupo.hidden = !abrir;
    if (!abrir || sinAnimacion.matches) return;
    [...grupo.children].forEach((hijo, i) => hijo.style.setProperty("--j", i));
    grupo.classList.remove("abriendo");
    void grupo.offsetWidth;
    grupo.classList.add("abriendo");
    clearTimeout(temporizador);
    // Deben coincidir con .abriendo en css/index.css: 0,4 s + 0,035 s por botón
    temporizador = setTimeout(() => grupo.classList.remove("abriendo"), 400 + grupo.children.length * 35 + 100);
  });
});

function contarBotonesDeGrupos() {
  document.querySelectorAll(".titulo-boton").forEach((boton) => {
    const grupo = document.getElementById(boton.getAttribute("aria-controls"));
    boton.querySelector(".contador").textContent =
      grupo.querySelectorAll(":scope > a, :scope > .desplegable").length;
  });
}

/* ---------- Aviso "Próximamente" ---------- */

// Un aviso abajo de la pantalla para los botones que todavía no tienen enlace,
// con un atajo a WhatsApp que ya trae escrito el nombre del botón.
const aviso = document.createElement("div");
aviso.className = "aviso";
aviso.setAttribute("role", "status");
document.body.appendChild(aviso);
// Sale de js/config.js. Vacío: wa.me deja elegir el contacto (sigue funcionando)
const NUMERO_WHATSAPP = (window.CONFIG_ALQUILER && window.CONFIG_ALQUILER.whatsapp) || "";
const DURACION_AVISO = 4500;
let temporizadorAviso;

const ocultarAviso = () => aviso.classList.remove("visible");

function mostrarProximamente(nombre) {
  const t = TEXTOS[lang];
  const icono = document.createElement("span");
  icono.className = "aviso-icono";
  icono.setAttribute("aria-hidden", "true");
  icono.textContent = "🚧";
  const cuerpo = document.createElement("div");
  cuerpo.className = "aviso-cuerpo";
  const titulo = document.createElement("strong");
  titulo.textContent = `${nombre}: ${t.proximo}`;
  const texto = document.createElement("span");
  texto.textContent = t.proximoTexto;
  cuerpo.append(titulo, texto);
  const accion = document.createElement("a");
  accion.className = "aviso-accion";
  accion.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(t.proximoWhatsapp.replace("{nombre}", nombre))}`;
  accion.target = "_blank";
  accion.rel = "noopener";
  accion.textContent = t.proximoAccion;
  aviso.replaceChildren(icono, cuerpo, accion);
  // Se reinicia la animación aunque ya esté a la vista, para que se note el aviso nuevo
  aviso.classList.remove("visible");
  void aviso.offsetWidth;
  aviso.classList.add("visible");
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(ocultarAviso, DURACION_AVISO);
}

// Mientras el mouse está encima no se va, para que dé tiempo a tocar "Escríbeme"
aviso.addEventListener("pointerenter", () => clearTimeout(temporizadorAviso));
aviso.addEventListener("pointerleave", () => {
  temporizadorAviso = setTimeout(ocultarAviso, 1500);
});

/* ---------- Hoja "Compartir" ---------- */

const hoja = document.getElementById("compartir");
// La URL pública de js/config.js; mientras no esté, la dirección actual de la página
const URL_SITIO = (window.CONFIG_ALQUILER && window.CONFIG_ALQUILER.urlPublica) || location.href.split(/[?#]/)[0];
// Debe coincidir con hoja-bajar en css/index.css
const DURACION_CIERRE_HOJA = 250;

function abrirHoja() {
  const t = TEXTOS[lang];
  document.getElementById("compartir-whatsapp").href =
    `https://wa.me/?text=${encodeURIComponent(`${t.compartirMensaje} ${URL_SITIO}`)}`;
  hoja.classList.remove("cerrando");
  hoja.style.transform = "";
  hoja.showModal();
}

function cerrarHoja() {
  if (sinAnimacion.matches) {
    hoja.close();
    return;
  }
  hoja.classList.add("cerrando");
  setTimeout(() => {
    hoja.close();
    hoja.classList.remove("cerrando");
    hoja.style.transform = "";
  }, DURACION_CIERRE_HOJA);
}

if (hoja) {
  document.getElementById("btn-compartir").addEventListener("click", abrirHoja);
  hoja.querySelector("[data-cerrar]").addEventListener("click", cerrarHoja);
  hoja.addEventListener("click", (e) => {
    if (e.target === hoja) cerrarHoja();
  });
  hoja.addEventListener("cancel", (e) => {
    e.preventDefault();
    cerrarHoja();
  });

  // Copiar enlace: corazones y "¡Enlace copiado!" por un momento
  const copiar = document.getElementById("copiar-enlace");
  const textoCopiar = copiar.querySelector("[data-i18n]");
  copiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(URL_SITIO);
    } catch (e) {
      // Sin permiso para el portapapeles (o sin HTTPS): el método viejo
      const campo = document.createElement("textarea");
      campo.value = URL_SITIO;
      hoja.appendChild(campo);
      campo.select();
      document.execCommand("copy");
      campo.remove();
    }
    lanzarCorazones(copiar, 20, hoja);
    textoCopiar.textContent = TEXTOS[lang].copiado;
    copiar.classList.add("copiado");
    setTimeout(() => {
      textoCopiar.textContent = TEXTOS[lang].copiarEnlace;
      copiar.classList.remove("copiado");
    }, 2200);
  });

  // El menú de compartir del sistema solo existe en algunos navegadores
  const nativo = document.getElementById("compartir-nativo");
  if (navigator.share) {
    nativo.hidden = false;
    nativo.addEventListener("click", () => {
      navigator.share({ title: document.title, text: TEXTOS[lang].compartirMensaje, url: URL_SITIO }).catch(() => { });
    });
  }

  // Arrastrar la barrita de arriba hacia abajo cierra la hoja, como en las apps del celular
  const asa = hoja.querySelector(".hoja-asa");
  let inicioY = null;
  asa.addEventListener("pointerdown", (e) => {
    inicioY = e.clientY;
    asa.setPointerCapture(e.pointerId);
    hoja.classList.add("arrastrando");
  });
  asa.addEventListener("pointermove", (e) => {
    if (inicioY === null) return;
    hoja.style.transform = `translateY(${Math.max(0, e.clientY - inicioY)}px)`;
  });
  const soltar = (e) => {
    if (inicioY === null) return;
    const recorrido = e.clientY - inicioY;
    inicioY = null;
    hoja.classList.remove("arrastrando");
    if (recorrido > 90) cerrarHoja();
    else hoja.style.transform = "";
  };
  asa.addEventListener("pointerup", soltar);
  asa.addEventListener("pointercancel", soltar);
}

/* ---------- Pistas de "hay más abajo" ---------- */

// Cómo se avisa que la página sigue hacia abajo, según <html data-pista="...">:
//   (sin data-pista) "pildora": la píldora "Hay más abajo" al centro
//   "desvanecido": el borde de abajo de la pantalla se desvanece
//   "giro": el botón "Subir" aparece al entrar con la flecha hacia abajo y gira al bajar
//   "flecha": una flecha que rebota debajo de los íconos de redes
//   "empujon": la página baja un poco sola y vuelve, una vez
//   "indice": chips con los grupos de la página, que llevan a cada uno
const PISTA = document.documentElement.dataset.pista || "pildora";
// Después de que entran los botones (ver terminarEntrada)
const ESPERA_HAY_MAS = 1800;
const DISTANCIA_HAY_MAS = 60;
const sobraPagina = () => document.documentElement.scrollHeight - innerHeight;
const bajarPagina = () => window.scrollBy({ top: innerHeight * 0.7, behavior: sinAnimacion.matches ? "auto" : "smooth" });
const FLECHA_ABAJO = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path class="hay-mas-flecha" d="M6 6l6 6 6-6"/><path class="hay-mas-flecha" d="M6 12l6 6 6-6"/></svg>`;

/* ---------- Botón "Subir" ---------- */

// Aparece después de bajar un poco; el aro se va llenando según cuánto se recorrió de la página.
// Con la pista "giro" también se ve al entrar, con la flecha hacia abajo para bajar.
const btnSubir = document.getElementById("btn-subir");
const DISTANCIA_SUBIR = 400;
// Debe coincidir con subir-despegar en css/index.css
const DURACION_DESPEGUE = 600;

if (btnSubir) {
  const gira = PISTA === "giro";
  let entradaLista = false;
  let pendiente = false;
  const actualizarSubir = () => {
    pendiente = false;
    const recorrido = sobraPagina();
    const progreso = recorrido > 0 ? Math.min(100, (scrollY / recorrido) * 100) : 0;
    btnSubir.style.setProperty("--progreso", progreso.toFixed(1));
    const arriba = scrollY <= DISTANCIA_SUBIR;
    btnSubir.classList.toggle("visible", !arriba || (gira && entradaLista && recorrido > 120));
    if (!gira) return;
    const bajar = arriba;
    if (btnSubir.classList.contains("bajar") === bajar) return;
    btnSubir.classList.toggle("bajar", bajar);
    // aplicarIdioma usa data-i18n-aria: así el texto sigue a la dirección también al cambiar de idioma
    btnSubir.dataset.i18nAria = bajar ? "hayMas" : "subir";
    btnSubir.setAttribute("aria-label", TEXTOS[lang][btnSubir.dataset.i18nAria]);
    btnSubir.dataset.descripcion = TEXTOS[lang][btnSubir.dataset.i18nAria];
  };
  if (gira) {
    btnSubir.classList.add("bajar");
    btnSubir.dataset.i18nAria = "hayMas";
    setTimeout(() => {
      entradaLista = true;
      actualizarSubir();
    }, ESPERA_HAY_MAS);
  }
  // Un cálculo por cuadro como mucho, aunque el evento scroll llegue muchas veces
  window.addEventListener("scroll", () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(actualizarSubir);
  }, { passive: true });
  window.addEventListener("resize", actualizarSubir);
  actualizarSubir();

  btnSubir.addEventListener("click", () => {
    if (btnSubir.classList.contains("bajar")) {
      bajarPagina();
      return;
    }
    // La flecha sale disparada hacia arriba mientras la página sube
    btnSubir.classList.remove("despegando");
    void btnSubir.offsetWidth;
    btnSubir.classList.add("despegando");
    setTimeout(() => btnSubir.classList.remove("despegando"), DURACION_DESPEGUE);
    window.scrollTo({ top: 0, behavior: sinAnimacion.matches ? "auto" : "smooth" });
  });
}

/* ---------- Pista "pildora": aviso "Hay más abajo" ---------- */

// Al entrar, si la página sigue más allá de la pantalla, invita a bajar. Se va al primer
// desplazamiento y no vuelve en esa visita, para no molestar a quien ya sabe que hay más.
const hayMas = document.getElementById("hay-mas");

if (hayMas && PISTA !== "pildora") hayMas.remove();
else if (hayMas) {
  let listo = false;
  const quitar = () => {
    listo = true;
    hayMas.classList.remove("visible");
  };
  setTimeout(() => {
    if (!listo && scrollY < DISTANCIA_HAY_MAS && sobraPagina() > 120) hayMas.classList.add("visible");
  }, ESPERA_HAY_MAS);
  window.addEventListener("scroll", () => {
    if (!listo && scrollY > DISTANCIA_HAY_MAS) quitar();
  }, { passive: true });
  hayMas.addEventListener("click", () => {
    quitar();
    bajarPagina();
  });
}

/* ---------- Pista "desvanecido": el borde de abajo se pierde en el fondo ---------- */

// Mientras quede página por debajo, los botones del borde de abajo se desvanecen hacia el fondo.
// Al llegar al final se quita, para que el pie se lea entero.
if (PISTA === "desvanecido") {
  const niebla = document.createElement("div");
  niebla.className = "niebla";
  niebla.setAttribute("aria-hidden", "true");
  document.body.appendChild(niebla);
  let entradaLista = false;
  const actualizarNiebla = () => {
    niebla.classList.toggle("visible", entradaLista && sobraPagina() - scrollY > 40);
  };
  setTimeout(() => {
    entradaLista = true;
    actualizarNiebla();
  }, ESPERA_HAY_MAS);
  window.addEventListener("scroll", actualizarNiebla, { passive: true });
  window.addEventListener("resize", actualizarNiebla);
}

/* ---------- Pista "flecha": flecha que rebota debajo de las redes ---------- */

// Es parte de la página (no flota): al tocarla baja hasta el primer grupo de botones
if (PISTA === "flecha") {
  const iconos = document.getElementById("iconos");
  const flecha = document.createElement("button");
  flecha.type = "button";
  flecha.className = "flecha-mas";
  flecha.dataset.i18nAria = "hayMas";
  flecha.setAttribute("aria-label", TEXTOS[lang].hayMas);
  flecha.innerHTML = FLECHA_ABAJO;
  flecha.addEventListener("click", () => {
    document.querySelector(".titulo-grupo")?.scrollIntoView({ block: "start", behavior: sinAnimacion.matches ? "auto" : "smooth" });
  });
  iconos?.after(flecha);
}

/* ---------- Pista "empujon": la página baja un poco sola y vuelve ---------- */

// Una sola vez, cuando terminan de entrar los botones, para que se note que la página se desplaza.
// Si el visitante ya tocó, desplazó o usó el teclado, no se hace (y si lo hace a mitad, no se vuelve).
const EMPUJON = 64;
const DURACION_EMPUJON = 450;

if (PISTA === "empujon" && !sinAnimacion.matches) {
  let tocado = false;
  const marcar = () => { tocado = true; };
  ["pointerdown", "wheel", "touchstart", "keydown"].forEach((ev) =>
    window.addEventListener(ev, marcar, { once: true, passive: true }));
  setTimeout(() => {
    if (tocado || scrollY > 10 || sobraPagina() < 120) return;
    window.scrollTo({ top: EMPUJON, behavior: "smooth" });
    setTimeout(() => {
      if (!tocado) window.scrollTo({ top: 0, behavior: "smooth" });
    }, DURACION_EMPUJON);
  }, ESPERA_HAY_MAS);
}

/* ---------- Pista "indice": chips con los grupos de la página ---------- */

// Un chip por cada título de grupo de index.html. Al tocarlo abre el grupo (si estaba cerrado)
// y baja hasta él. Los textos son los mismos data-i18n de los títulos, así cambian de idioma.
if (PISTA === "indice") {
  const indice = document.createElement("nav");
  indice.className = "indice-grupos";
  indice.setAttribute("aria-label", "Grupos");
  document.querySelectorAll(".titulo-grupo").forEach((titulo) => {
    const nombre = titulo.querySelector("[data-i18n]");
    if (!nombre) return;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "indice-chip";
    const texto = document.createElement("span");
    texto.dataset.i18n = nombre.dataset.i18n;
    texto.textContent = nombre.textContent;
    chip.appendChild(texto);
    chip.addEventListener("click", () => {
      const plegar = titulo.querySelector(".titulo-boton");
      if (plegar && plegar.getAttribute("aria-expanded") !== "true") plegar.click();
      titulo.scrollIntoView({ block: "start", behavior: sinAnimacion.matches ? "auto" : "smooth" });
    });
    indice.appendChild(chip);
  });
  document.getElementById("iconos")?.after(indice);
}

/* ---------- Perfil (perfil.json) ---------- */

// Foto, color del aro y burbuja de pensamiento. Se editan en admin.html.
// Si perfil.json no carga, queda lo que trae index.html.
const FOTO_VACIA = "images/avatar-vacio.svg";
const PIXEL_TRANSPARENTE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

async function cargarPerfil() {
  const wrap = document.getElementById("avatar-wrap");
  if (!wrap) return;
  try {
    const perfil = BORRADOR ? BORRADOR.perfil : await (await fetch("perfil.json")).json();
    const foto = perfil.foto || FOTO_VACIA;
    const avatar = document.getElementById("avatar");
    if (perfil.foto && perfil.encuadre) {
      // GIF animado: no se recorta (quedaría quieto). Va de fondo, movido y agrandado según
      // el encuadre de admin.html, y el <img> queda transparente encima con su borde y forma.
      avatar.src = PIXEL_TRANSPARENTE;
      avatar.style.background = `url("${foto}") ${perfil.encuadre.posicion} / ${perfil.encuadre.tamano} no-repeat`;
    } else {
      avatar.src = foto;
    }
    const fotoQr = document.querySelector(".hoja-qr-foto");
    if (fotoQr) fotoQr.src = foto;
    // En <html> y no solo en la foto: el resplandor del fondo también usa el color del aro
    if (perfil.aro) document.documentElement.dataset.aro = perfil.aro;
    aplicarOpcionesPagina(perfil.pagina || {});

    const estado = perfil.estado || {};
    const burbuja = document.getElementById("btn-disponible");
    // display: flex de .pensamiento le gana a [hidden], por eso se oculta con style
    burbuja.style.display = estado.mostrar === false ? "none" : "";
    if (estado.punto) burbuja.dataset.punto = estado.punto;
    if (estado.texto) TEXTOS.es.estado = estado.texto;
    if (estado.textoEn || estado.texto) TEXTOS.en.estado = estado.textoEn || estado.texto;
    aplicarIdioma();
  } catch (err) {
    console.error("No se pudo cargar perfil.json", err);
  }
}

// "pagina" de perfil.json: idioma y tema por defecto, y si se ven sus botones.
// "auto" sigue al navegador. Con el botón visible, lo que eligió el visitante gana al defecto;
// con el botón oculto, siempre se usa el defecto (el visitante no lo puede cambiar).
function aplicarOpcionesPagina(pag) {
  const btnIdioma = document.getElementById("btn-idioma");
  const btnTema = document.getElementById("btn-tema");
  const ocultarIdioma = pag.mostrarIdioma === false;
  const ocultarTema = pag.mostrarTema === false;
  if (btnIdioma) btnIdioma.style.display = ocultarIdioma ? "none" : "";
  if (btnTema) btnTema.style.display = ocultarTema ? "none" : "";

  const idiomaNavegador = (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  if (ocultarIdioma || !leer("social-lang")) {
    lang = TEXTOS[pag.idioma] ? pag.idioma : idiomaNavegador;
  }

  if (ocultarTema || !leer("social-theme")) {
    const temaSistema = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = ["light", "dark"].includes(pag.tema) ? pag.tema : temaSistema;
  }
}

const anio = document.getElementById("anio");
if (anio) anio.textContent = new Date().getFullYear();

aplicarIdioma();
// Los botones esperan al perfil: el tema por defecto cambia cómo se pintan los de GitHub
cargarPerfil().then(cargarBotones);
