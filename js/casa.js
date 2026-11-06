// Página de una casa (casa.html?id=casa-1): foto, datos, habitaciones y ubicación.
// Los datos salen de js/config.js (window.CONFIG_ALQUILER). Sin id válido, vuelve a la lista de casas.

(function () {
  const C = window.CONFIG_ALQUILER;
  if (!C) return;

  const $ = (id) => document.getElementById(id);
  const precio = (n) => `${C.moneda} ${Number(n).toLocaleString("es-BO")}`;
  const enlaceWhatsapp = (texto) => `https://wa.me/${C.whatsapp || ""}?text=${encodeURIComponent(texto)}`;

  function el(etiqueta, clase, texto) {
    const e = document.createElement(etiqueta);
    if (clase) e.className = clase;
    if (texto != null) e.textContent = texto;
    return e;
  }

  function enlace(clase, texto, href, externo) {
    const a = el("a", clase, texto);
    a.href = href;
    if (externo) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  const id = new URLSearchParams(location.search).get("id");
  const casa = C.casas.find((c) => c.id === id);
  if (!casa) {
    location.replace("index.html#casas");
    return;
  }

  document.title = `${casa.nombre} | Bertha Estrada`;
  const habitaciones = C.habitaciones.filter((h) => h.casa === casa.id);

  /* ---------- Cabecera de la casa ---------- */

  function pintarCasa() {
    const detalle = $("casa-detalle");

    let foto;
    if (casa.imagen) {
      foto = el("img", "casa-detalle-foto");
      foto.src = casa.imagen;
      foto.alt = `Foto de ${casa.nombre}`;
    } else {
      foto = el("div", "casa-detalle-foto casa-foto-vacia");
      foto.setAttribute("role", "img");
      foto.setAttribute("aria-label", "Foto pendiente");
      foto.append(el("span", null, "📷"), el("span", null, "Foto pendiente"));
    }

    const titulo = el("h1", null, casa.nombre);
    if (casa.provisional) titulo.append(" ", el("span", "etiqueta-provisional", "Dato de ejemplo"));

    const disponibles = habitaciones.filter((h) => h.disponible).length;
    const precios = habitaciones.map((h) => h.precio);
    const datos = el("ul", "casa-detalle-datos");
    datos.append(el("li", null, `📍 ${casa.zona}`));
    if (precios.length) datos.append(el("li", null, `🛏️ Habitaciones desde ${precio(Math.min(...precios))} / mes`));
    if (casa.casaCompleta) datos.append(el("li", null, `🏠 Casa completa: ${precio(casa.casaCompleta)} / mes`));
    datos.append(el("li", null, disponibles ? `✅ ${disponibles} habitación(es) libre(s)` : "⏳ Sin habitaciones libres por ahora"));

    const acciones = el("div", "habitacion-acciones");
    acciones.append(enlace("boton-alquiler boton-whatsapp", "Consultar por WhatsApp",
      enlaceWhatsapp(`Hola Bertha, quiero consultar por ${casa.nombre}.`), true));
    if (casa.mapa) acciones.append(enlace("boton-alquiler boton-secundario", "Abrir en Google Maps", casa.mapa, true));

    detalle.append(foto, titulo, el("p", "casa-descripcion", casa.descripcion), datos, acciones);
  }

  /* ---------- Habitaciones de esta casa ---------- */

  function pintarHabitaciones() {
    const lista = $("lista-habitaciones");
    if (!habitaciones.length) {
      lista.append(el("p", "vacio", "Esta casa no tiene habitaciones cargadas. Consulta por WhatsApp."));
      return;
    }
    habitaciones.forEach((h) => {
      const tarjeta = el("article", `habitacion${h.disponible ? "" : " ocupada"}`);
      if (h.imagen) {
        const img = el("img", "habitacion-foto");
        img.src = h.imagen;
        img.alt = `Foto de ${h.nombre}`;
        img.loading = "lazy";
        tarjeta.append(img);
      }
      const cabecera = el("div", "habitacion-cabecera");
      const titulo = el("h3", null, h.nombre);
      if (h.provisional) titulo.append(" ", el("span", "etiqueta-provisional", "Dato de ejemplo"));
      cabecera.append(titulo, el("span", `estado ${h.disponible ? "libre" : "ocupado"}`, h.disponible ? "Disponible" : "Ocupada"));

      const servicios = el("ul", "servicios");
      servicios.setAttribute("aria-label", "Servicios incluidos");
      h.servicios.forEach((s) => servicios.append(el("li", null, s)));

      const acciones = el("div", "habitacion-acciones");
      acciones.append(enlace("boton-alquiler boton-whatsapp", "Consultar",
        enlaceWhatsapp(`Hola Bertha, quiero consultar por "${h.nombre}" de ${casa.nombre}.`), true));
      if (h.disponible) {
        // Abre la ventana "Reservar" del index con la casa y la habitación ya elegidas
        const datos = new URLSearchParams({ casa: casa.id, habitacion: h.nombre });
        acciones.append(enlace("boton-alquiler boton-principal", "Solicitar reserva", `index.html?${datos}#reservar`, false));
      }

      tarjeta.append(
        cabecera,
        el("p", "habitacion-precio", `${precio(h.precio)} / mes`),
        servicios,
        el("p", "habitacion-condiciones", h.condiciones),
        acciones
      );
      lista.append(tarjeta);
    });
  }

  /* ---------- Otras casas ---------- */

  function pintarOtras() {
    const lista = $("otras-casas");
    C.casas.filter((c) => c.id !== casa.id).forEach((c) => {
      lista.append(enlace("chip", c.nombre, `casa.html?id=${encodeURIComponent(c.id)}`));
    });
  }

  pintarCasa();
  pintarHabitaciones();
  pintarOtras();
  document.querySelectorAll("[data-whatsapp]").forEach((a) => { a.href = enlaceWhatsapp(C.mensajeWhatsapp); });
  $("anio").textContent = new Date().getFullYear();
})();
