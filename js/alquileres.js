// Secciones de alquiler: casas, habitaciones, ubicaciones, reserva, pago con QR y reglas.
// Los datos salen de js/config.js (window.CONFIG_ALQUILER). Aquí no hay datos: solo cómo se muestran.
// No hay servidor: la "reserva" arma un mensaje de WhatsApp; no se guarda nada en el navegador.

(function () {
  const C = window.CONFIG_ALQUILER;
  if (!C) return;

  const $ = (id) => document.getElementById(id);
  const precio = (n) => `${C.moneda} ${Number(n).toLocaleString("es-BO")}`;
  const casaPorId = (id) => C.casas.find((c) => c.id === id);
  const enlaceWhatsapp = (texto) => `https://wa.me/${C.whatsapp || ""}?text=${encodeURIComponent(texto)}`;

  // Crea un elemento con clase y texto (textContent: nada de lo escrito se interpreta como HTML)
  function el(etiqueta, clase, texto) {
    const e = document.createElement(etiqueta);
    if (clase) e.className = clase;
    if (texto != null) e.textContent = texto;
    return e;
  }

  /* ---------- Mis cuatro casas ---------- */
  // En el index solo van miniaturas (foto + nombre); el detalle y las habitaciones están en casa.html

  function pintarCasas() {
    const lista = $("lista-casas");
    C.casas.forEach((casa) => {
      const disponibles = C.habitaciones.filter((h) => h.casa === casa.id && h.disponible).length;
      const mini = el("a", "casa-mini");
      mini.href = `casa.html?id=${encodeURIComponent(casa.id)}`;
      mini.setAttribute("aria-label", `${casa.nombre}: ${disponibles ? `${disponibles} habitación(es) libre(s)` : "sin habitaciones libres"}`);
      const marco = el("span", "casa-mini-foto");
      if (casa.imagen) {
        const img = el("img");
        img.src = casa.imagen;
        img.alt = "";
        img.loading = "lazy";
        marco.append(img);
      } else {
        marco.append(el("span", "casa-mini-vacia", "📷"));
      }
      if (disponibles) marco.append(el("span", "casa-mini-libres", `${disponibles} libre${disponibles > 1 ? "s" : ""}`));
      mini.append(marco, el("span", "casa-mini-nombre", casa.nombre));
      lista.append(mini);
    });
  }

  /* ---------- Ubicación ---------- */

  // Abre la ventana del mapa de js/main.js con todos los pines (en una casa si se indica).
  // Sin esa ventana, o sin coordenadas, abre Google Maps.
  function abrirMapa(casa) {
    // lugaresPorBoton es un const global de js/main.js (no cuelga de window)
    const lugares = typeof lugaresPorBoton !== "undefined" ? lugaresPorBoton.casas : null;
    if (typeof abrirUbicame === "function" && lugares && lugares.length) {
      abrirUbicame(lugares, "grupo", casa ? lugares.find((l) => l.id === casa.id) || null : null);
      return;
    }
    const destino = casa || C.casas.find((c) => c.lat != null);
    if (!destino) return;
    window.open(destino.mapa || `https://www.google.com/maps?q=${destino.lat},${destino.lng}`, "_blank", "noopener");
  }

  // Mapa de la sección "Ubícanos": Leaflet (lo carga js/main.js) con los mismos pines que la ventana grande
  let mapaCasas = null;
  const MARGEN_MAPA = { paddingTopLeft: [30, 64], paddingBottomRight: [30, 24], maxZoom: 16 };
  const pinesCasas = {};

  function marcarFila(id) {
    document.querySelectorAll("#lista-ubicaciones .ubicacion").forEach((f) => {
      f.classList.toggle("elegida", f.dataset.casa === id);
    });
  }

  // Encuadra todas las casas a la vez (al cargar y con el botón "Ver las N casas")
  function verTodas(conPin, animar) {
    marcarFila(null);
    $("mapa-todas").setAttribute("aria-pressed", "true");
    if (!mapaCasas) return;
    mapaCasas.flyToBounds(conPin.map((c) => [c.lat, c.lng]), { ...MARGEN_MAPA, animate: animar, duration: 0.8 });
    Object.values(pinesCasas).forEach((pin) => {
      pin.getElement()?.classList.remove("elegido");
      pin.setZIndexOffset(0);
    });
  }

  function irACasa(casa) {
    marcarFila(casa.id);
    $("mapa-todas").setAttribute("aria-pressed", "false");
    if (!mapaCasas) {
      abrirMapa(casa);
      return;
    }
    const animar = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    mapaCasas.flyTo([casa.lat, casa.lng], 16, { animate: animar, duration: 0.8 });
    Object.entries(pinesCasas).forEach(([id, pin]) => {
      pin.getElement()?.classList.toggle("elegido", id === casa.id);
      pin.setZIndexOffset(id === casa.id ? 1000 : 0);
    });
  }

  async function crearMapaCasas(conPin) {
    const marco = $("mapa-casas");
    if (typeof cargarLeaflet !== "function") return;
    let L;
    try {
      L = await cargarLeaflet();
    } catch (e) {
      return; // Sin Leaflet (sin internet): queda el dibujo de fondo y el botón de ampliar
    }
    mapaCasas = L.map($("mapa-casas-leaflet"), { scrollWheelZoom: false });
    mapaCasas.fitBounds(conPin.map((c) => [c.lat, c.lng]), MARGEN_MAPA);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).once("load", () => marco.classList.add("cargado")).addTo(mapaCasas);
    conPin.forEach((c, i) => {
      const n = C.casas.indexOf(c) + 1;
      const icono = L.divIcon({ className: "pin-grupo", html: `<span style="--i:${i}">${n}</span>`, iconSize: [32, 32], iconAnchor: [16, 39] });
      pinesCasas[c.id] = L.marker([c.lat, c.lng], { icon: icono, title: c.nombre, alt: c.nombre })
        .bindTooltip(c.nombre, { direction: "top", offset: [0, -36] })
        .on("click", () => irACasa(c))
        .addTo(mapaCasas);
    });
  }

  function pintarUbicaciones() {
    const conPin = C.casas.filter((c) => c.lat != null && c.lng != null);
    const marco = $("mapa-casas");

    // El mapa se pide recién cuando la sección está por verse
    if (conPin.length) {
      if ("IntersectionObserver" in window) {
        const vigia = new IntersectionObserver((entradas) => {
          if (!entradas.some((e) => e.isIntersecting)) return;
          vigia.disconnect();
          crearMapaCasas(conPin);
        }, { rootMargin: "300px" });
        vigia.observe(marco);
      } else {
        crearMapaCasas(conPin);
      }
    } else {
      marco.hidden = true;
    }
    $("mapa-ampliar").addEventListener("click", () => abrirMapa(null));
    const todas = $("mapa-todas");
    todas.textContent = `◎ Ver las ${conPin.length} casas`;
    todas.hidden = conPin.length < 2;
    todas.addEventListener("click", () => verTodas(conPin, !matchMedia("(prefers-reduced-motion: reduce)").matches));

    const lista = $("lista-ubicaciones");
    C.casas.forEach((casa, i) => {
      const conUbicacion = casa.lat != null && casa.lng != null;
      const fila = el(conUbicacion ? "button" : "div", "ubicacion");
      fila.dataset.casa = casa.id;
      const texto = el("span", "ubicacion-texto");
      texto.append(el("strong", null, casa.nombre), el("span", null, casa.zona));
      fila.append(el("span", "ubicacion-numero", String(i + 1)), texto);
      if (conUbicacion) {
        fila.type = "button";
        fila.setAttribute("aria-label", `${casa.nombre}: ver en el mapa`);
        fila.addEventListener("click", () => {
          irACasa(casa);
          marco.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      } else if (casa.mapa) {
        const enlace = el("a", "boton-alquiler boton-secundario", "Abrir en Google Maps");
        enlace.href = casa.mapa;
        enlace.target = "_blank";
        enlace.rel = "noopener";
        fila.append(enlace);
      } else {
        fila.append(el("span", "pendiente", "Ubicación pendiente"));
      }
      lista.append(fila);
    });
  }

  /* ---------- Reservar ---------- */

  const form = $("form-reserva");
  const selectCasa = $("reserva-casa");
  const selectHabitacion = $("reserva-habitacion");

  function llenarCasas() {
    C.casas.forEach((c) => selectCasa.append(new Option(c.nombre, c.id)));
  }

  function llenarHabitaciones() {
    selectHabitacion.replaceChildren(new Option("Cualquiera", ""));
    C.habitaciones
      .filter((h) => h.casa === selectCasa.value && h.disponible)
      .forEach((h) => selectHabitacion.append(new Option(`${h.nombre} · ${precio(h.precio)}`, h.nombre)));
  }

  // Devuelve el mensaje de error de un campo, o "" si está bien
  function validar(campo) {
    const valor = campo.value.trim();
    if (campo.required && !valor) return "Este campo es obligatorio.";
    if (campo.id === "reserva-nombre" && valor.length < 3) return "Escribe tu nombre completo.";
    if (campo.id === "reserva-whatsapp") {
      const digitos = valor.replace(/[\s()+-]/g, "");
      if (!/^\d{8,15}$/.test(digitos)) return "Escribe un número válido (8 a 15 dígitos, con código de país si no es de Bolivia).";
    }
    return "";
  }

  function mostrarError(campo) {
    const error = validar(campo);
    const aviso = $(`${campo.id}-error`);
    campo.setAttribute("aria-invalid", String(!!error));
    if (aviso) aviso.textContent = error;
    return !error;
  }

  function enviarReserva(e) {
    e.preventDefault();
    const campos = [...form.querySelectorAll("input, select, textarea")];
    const validos = campos.map(mostrarError);
    if (validos.includes(false)) {
      campos[validos.indexOf(false)].focus();
      return;
    }
    const casa = casaPorId(selectCasa.value);
    const mensaje = [
      "Hola Bertha, quiero solicitar una reserva:",
      `• Nombre: ${$("reserva-nombre").value.trim()}`,
      `• WhatsApp: ${$("reserva-whatsapp").value.trim()}`,
      `• Casa: ${casa ? casa.nombre : ""}`,
      `• Habitación: ${selectHabitacion.value || "Cualquiera / casa completa"}`,
      $("reserva-mensaje").value.trim() ? `• Mensaje: ${$("reserva-mensaje").value.trim()}` : ""
    ].filter(Boolean).join("\n");

    const confirmacion = $("reserva-confirmacion");
    $("reserva-enviar-whatsapp").href = enlaceWhatsapp(mensaje);
    confirmacion.hidden = false;
    confirmacion.focus();
  }

  /* ---------- Ventanas emergentes: "Reservar" y "Pagar alquiler" ---------- */

  const sinAnimacion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Qué ventana abre cada enlace del pie de página y de los accesos rápidos (botones.json)
  const VENTANA_POR_ENLACE = { "#reservar": "ventana-reserva", "#pagar": "ventana-pago", "#reglas": "ventana-reglas" };

  function abrirVentana(ventana) {
    ventana.classList.remove("cerrando");
    if (!ventana.open) ventana.showModal();
  }

  function cerrarVentana(ventana) {
    if (sinAnimacion()) {
      ventana.close();
      return;
    }
    ventana.classList.add("cerrando");
    setTimeout(() => {
      ventana.close();
      ventana.classList.remove("cerrando");
    }, 200);
  }

  // casaId / habitacion: quedan elegidos en el formulario (al venir desde casa.html)
  function abrirReserva(casaId, habitacion) {
    if (casaId && casaPorId(casaId)) {
      selectCasa.value = casaId;
      llenarHabitaciones();
      if (habitacion) selectHabitacion.value = habitacion;
    }
    abrirVentana($("ventana-reserva"));
    setTimeout(() => $("reserva-nombre").focus({ preventScroll: true }), 60);
  }

  function iniciarVentanas() {
    Object.values(VENTANA_POR_ENLACE).forEach((id) => {
      const ventana = $(id);
      ventana.querySelector("[data-cerrar]").addEventListener("click", () => cerrarVentana(ventana));
      ventana.addEventListener("click", (e) => {
        if (e.target === ventana) cerrarVentana(ventana);
      });
      ventana.addEventListener("cancel", (e) => {
        e.preventDefault();
        cerrarVentana(ventana);
      });
    });
    // Botones [data-abrir="id"] y enlaces a #reservar / #pagar (los de botones.json se crean después:
    // por eso se escucha en todo el documento)
    document.addEventListener("click", (e) => {
      const disparador = e.target.closest("[data-abrir], a[href^='#']");
      if (!disparador) return;
      const id = disparador.dataset.abrir || VENTANA_POR_ENLACE[disparador.getAttribute("href")];
      if (!id || !$(id)) return;
      e.preventDefault();
      if (id === "ventana-reserva") abrirReserva();
      else abrirVentana($(id));
    });
    // Desde casa.html: index.html?casa=casa-2&habitacion=Habitación%201#reservar
    if (location.hash === "#reservar") {
      const datos = new URLSearchParams(location.search);
      abrirReserva(datos.get("casa"), datos.get("habitacion"));
      history.replaceState(null, "", location.pathname);
    } else if (location.hash === "#pagar") {
      abrirVentana($("ventana-pago"));
      history.replaceState(null, "", location.pathname);
    }
  }

  function iniciarReserva() {
    llenarCasas();
    llenarHabitaciones();
    selectCasa.addEventListener("change", llenarHabitaciones);
    form.querySelectorAll("input, select, textarea").forEach((campo) => {
      // El error aparece al salir del campo y se corrige mientras se escribe
      campo.addEventListener("blur", () => mostrarError(campo));
      campo.addEventListener("input", () => {
        if (campo.getAttribute("aria-invalid") === "true") mostrarError(campo);
      });
    });
    form.addEventListener("submit", enviarReserva);
    form.addEventListener("reset", () => {
      $("reserva-confirmacion").hidden = true;
      form.querySelectorAll("[aria-invalid]").forEach((c) => c.removeAttribute("aria-invalid"));
      form.querySelectorAll(".campo-error").forEach((e) => { e.textContent = ""; });
      setTimeout(llenarHabitaciones);
    });
  }

  /* ---------- Pagar alquiler con QR ---------- */

  function pintarPago() {
    const marco = $("pago-qr");
    if (C.pago.qr) {
      const img = el("img");
      img.src = C.pago.qr;
      img.alt = "Código QR de cobro para pagar el alquiler";
      img.width = 220;
      img.height = 220;
      marco.replaceChildren(img);
      const descargar = $("pago-descargar");
      descargar.href = C.pago.qr;
      descargar.hidden = false;
    }
    $("pago-titular").textContent = C.pago.titular || "Titular PENDIENTE";
    $("pago-banco").textContent = C.pago.banco || "Banco PENDIENTE";
    const pasos = $("pago-instrucciones");
    C.pago.instrucciones.forEach((p) => pasos.append(el("li", null, p)));
    $("pago-comprobante").href = enlaceWhatsapp("Hola Bertha, te envío el comprobante de pago del alquiler. Nombre: , Casa: , Habitación: , Mes: ");
  }

  /* ---------- Reglas, contacto y QR de la página ---------- */

  function pintarReglas() {
    const lista = $("lista-reglas");
    C.reglas.forEach((r) => {
      const item = el("div", "regla");
      item.append(el("dt", null, r.titulo), el("dd", null, r.texto));
      lista.append(item);
    });
  }

  function prepararContacto() {
    document.querySelectorAll("[data-whatsapp]").forEach((a) => {
      a.href = enlaceWhatsapp(C.mensajeWhatsapp);
    });
    if (!C.whatsapp) {
      document.querySelectorAll("[data-falta-whatsapp]").forEach((n) => { n.hidden = false; });
    }
    const url = C.urlPublica || location.href.split(/[?#]/)[0];
    $("pie-url").href = url;
    $("pie-url-texto").textContent = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const hojaUrl = $("hoja-url");
    if (hojaUrl) hojaUrl.textContent = url.replace(/^https?:\/\//, "");
  }

  /* ---------- Cabecera: disponibilidad, accesos y "Guardar contacto" ---------- */

  function prepararCabecera() {
    const libres = C.habitaciones.filter((h) => h.disponible).length;
    $("estado-libres").lastChild.textContent = libres
      ? `${libres} habitaciones disponibles`
      : "Sin habitaciones libres por ahora";
    $("estado-libres").classList.toggle("sin-libres", !libres);

    const llamar = $("tile-llamar");
    const telefono = C.telefono || C.whatsapp;
    if (telefono) llamar.href = `tel:+${telefono}`;
    else llamar.hidden = true;

    // "Ubícanos": la oficina (js/config.js) en la ventana del mapa; sin esa ventana, Google Maps
    $("tile-mapa").addEventListener("click", () => {
      const o = C.oficina;
      if (!o) return abrirMapa(null);
      if (typeof abrirUbicame === "function") abrirUbicame([o], "ubicame");
      else window.open(o.mapa || `https://www.google.com/maps?q=${o.lat},${o.lng}`, "_blank", "noopener");
    });
    $("tile-compartir").addEventListener("click", () => $("btn-compartir").click());
    $("fila-comprobante").href = enlaceWhatsapp("Hola Bertha, te envío el comprobante de pago del alquiler. Nombre: , Casa: , Habitación: , Mes: ");

    // Tarjeta de contacto (vCard): el celular la abre en "Contactos" para guardarla
    $("guardar-contacto").addEventListener("click", () => {
      const url = C.urlPublica || location.href.split(/[?#]/)[0];
      const vcard = [
        "BEGIN:VCARD", "VERSION:3.0", "N:Estrada;Bertha;;;", "FN:Bertha Estrada",
        "TITLE:Alquiler de habitaciones y viviendas",
        C.telefono || C.whatsapp ? `TEL;TYPE=CELL:+${C.telefono || C.whatsapp}` : "",
        `URL:${url}`, "END:VCARD"
      ].filter(Boolean).join("\r\n");
      const enlace = document.createElement("a");
      enlace.href = URL.createObjectURL(new Blob([vcard], { type: "text/vcard" }));
      enlace.download = "Bertha-Estrada.vcf";
      enlace.click();
      setTimeout(() => URL.revokeObjectURL(enlace.href), 1000);
    });
  }

  /* ---------- QR de esta página ("Escanea para compartir") ---------- */

  // Lo genera qrcode-generator (cdnjs) recién cuando el recuadro está por verse. Sin internet, se oculta.
  const QR_LIB = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";

  function dibujarQrPagina() {
    const url = C.urlPublica || location.href.split(/[?#]/)[0];
    const qr = window.qrcode(0, "M");
    qr.addData(url);
    qr.make();
    const img = el("img");
    img.src = qr.createDataURL(6, 2);
    img.alt = `Código QR de ${url}`;
    $("qr-pagina-codigo").replaceChildren(img);
    const descargar = $("qr-pagina-descargar");
    descargar.href = qr.createDataURL(12, 4);
    descargar.hidden = false;
  }

  function prepararQrPagina() {
    const caja = $("qr-pagina");
    const cargar = () => {
      if (window.qrcode) return dibujarQrPagina();
      const script = document.createElement("script");
      script.src = QR_LIB;
      script.onload = dibujarQrPagina;
      script.onerror = () => { caja.hidden = true; };
      document.head.append(script);
    };
    if (!("IntersectionObserver" in window)) return cargar();
    const vigia = new IntersectionObserver((entradas) => {
      if (!entradas.some((e) => e.isIntersecting)) return;
      vigia.disconnect();
      cargar();
    }, { rootMargin: "300px" });
    vigia.observe(caja);
  }

  prepararCabecera();
  prepararQrPagina();
  pintarCasas();
  pintarUbicaciones();
  iniciarReserva();
  iniciarVentanas();
  pintarPago();
  pintarReglas();
  prepararContacto();
})();
