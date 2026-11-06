// DATOS DE LA PÁGINA: lo único que hace falta editar para poner la información real.
// Todo lo marcado con "provisional: true" o "PENDIENTE" son datos de ejemplo: reemplazarlos.
// No poner aquí contraseñas, claves ni números de cuenta: este archivo es público.

window.CONFIG_ALQUILER = {
  // WhatsApp en formato internacional, solo dígitos y sin "+" (Bolivia: 591 + número). Ej.: "59170000000".
  // Vacío: los botones abren WhatsApp para que la persona elija a quién escribir.
  whatsapp: "59173134422",

  // Teléfono para llamar (botón "Llamar"), mismo formato que whatsapp. Vacío: se usa el de WhatsApp.
  telefono: "59173134422",

  // URL pública definitiva cuando la página esté publicada (para compartir y para el QR de la página).
  // Vacío: se usa la dirección con la que se abrió la página.
  urlPublica: "",

  // Mensaje que ya viene escrito al tocar "Escríbeme por WhatsApp"
  mensajeWhatsapp: "Hola Bertha, vi tu página y quiero consultar por una habitación en alquiler.",

  // Moneda de los precios
  moneda: "Bs",

  // ---------- Oficina ----------
  // La abre el recuadro "Ubícanos" de arriba (ventana del mapa con Google Maps y Waze).
  oficina: {
    nombre: "Oficina · Manzana 40",
    direccion: "Manzana 40 - Plaza Empresarial, Santa Cruz de la Sierra",
    lat: -17.757415,
    lng: -63.199788,
    mapa: "https://www.google.com/maps/place/Manzana+40+-+Plaza+Empresarial/@-17.757415,-63.199788,17z"
  },

  // ---------- Las cuatro casas ----------
  // imagen: ruta a la foto (en images/casas/). Vacío: se muestra un espacio "Foto pendiente".
  // mapa: enlace de Google Maps de la casa (en Google Maps: Compartir → Copiar vínculo). Opcional.
  // lat / lng: coordenadas del pin en el mapa "Nuestras casas" (en Google Maps: clic derecho sobre la casa →
  //   copiar los números).
  // casaCompleta: precio si se alquila la casa entera; null si no se alquila completa.
  // provisional: true muestra la etiqueta "Dato de ejemplo" (fotos, zona y ubicación ya son reales).
  casas: [
    {
      id: "casa-1",
      provisional: true,
      nombre: "Casa naranja",
      descripcion: "Casa de dos plantas con balcones, terraza en la entrada y jardín al frente.",
      zona: "Santa Cruz",
      imagen: "images/casas/casa-naranja.jpg",
      mapa: "",
      lat: -17.7580867,
      lng: -63.1337817,
      casaCompleta: null
    },
    {
      id: "casa-2",
      provisional: true,
      nombre: "Casa ploma",
      descripcion: "Casa moderna de dos plantas con balcones, jardín y portón con acceso vehicular.",
      zona: "Santa Cruz",
      imagen: "images/casas/casa-ploma.jpg",
      mapa: "",
      lat: -17.762115,
      lng: -63.136186,
      casaCompleta: null
    },
    {
      id: "casa-3",
      provisional: true,
      nombre: "Casa azul",
      descripcion: "Casa de dos plantas con balcones, cuartos amueblados, servicios incluidos y jardín.",
      zona: "C. 7 Carlos Sickerle 142",
      imagen: "images/casas/casa-azul.jpg",
      mapa: "",
      lat: -17.7797897,
      lng: -63.2073390,
      casaCompleta: null
    },
    {
      id: "casa-4",
      provisional: true,
      nombre: "Casa roja",
      descripcion: "Casa de dos plantas con balcones, jardín con flores y habitaciones disponibles.",
      zona: "3er Anillo Externo de Circunvalación 3355",
      imagen: "images/casas/casa-roja.jpg",
      mapa: "",
      lat: -17.7774373,
      lng: -63.2056268,
      casaCompleta: null
    }
  ],

  // ---------- Habitaciones ----------
  // casa: el "id" de su casa. disponible: true / false (se actualiza a mano; no es en tiempo real).
  // imagen: foto de la habitación (en images/habitaciones/). Vacío: no se muestra foto.
  habitaciones: [
    // Casa 1
    { casa: "casa-1", provisional: true, nombre: "Habitación 1", precio: 800, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Balcón"], condiciones: "Mínimo 3 meses." },
    { casa: "casa-1", provisional: true, nombre: "Habitación 2", precio: 800, disponible: true, imagen: "images/habitaciones/habitacion-2.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Aire acondicionado"], condiciones: "Mínimo 3 meses." },
    { casa: "casa-1", provisional: true, nombre: "Habitación 3", precio: 750, disponible: true, imagen: "images/habitaciones/habitacion-3.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 3 meses." },
    { casa: "casa-1", provisional: true, nombre: "Habitación 4", precio: 750, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 3 meses." },
    // Casa 2
    { casa: "casa-2", provisional: true, nombre: "Habitación 1", precio: 900, disponible: true, imagen: "images/habitaciones/habitacion-2.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Aire acondicionado"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-2", provisional: true, nombre: "Habitación 2", precio: 900, disponible: true, imagen: "images/habitaciones/habitacion-3.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-2", provisional: true, nombre: "Habitación 3", precio: 850, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Balcón"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-2", provisional: true, nombre: "Habitación 4", precio: 850, disponible: true, imagen: "images/habitaciones/habitacion-2.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    // Casa 3
    { casa: "casa-3", provisional: true, nombre: "Habitación 1", precio: 950, disponible: true, imagen: "images/habitaciones/habitacion-3.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Terraza"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-3", provisional: true, nombre: "Habitación 2", precio: 950, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Balcón"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-3", provisional: true, nombre: "Habitación 3", precio: 900, disponible: true, imagen: "images/habitaciones/habitacion-2.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi", "Aire acondicionado"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-3", provisional: true, nombre: "Habitación 4", precio: 900, disponible: true, imagen: "images/habitaciones/habitacion-3.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    // Casa 4
    { casa: "casa-4", provisional: true, nombre: "Habitación 1", precio: 850, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-4", provisional: true, nombre: "Habitación 2", precio: 850, disponible: true, imagen: "images/habitaciones/habitacion-2.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-4", provisional: true, nombre: "Habitación 3", precio: 800, disponible: true, imagen: "images/habitaciones/habitacion-3.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." },
    { casa: "casa-4", provisional: true, nombre: "Habitación 4", precio: 800, disponible: true, imagen: "images/habitaciones/habitacion-1.jpg",
      servicios: ["Agua", "Luz", "Wi-Fi"], condiciones: "Mínimo 6 meses." }
  ],

  // ---------- Pago con QR ----------
  // qr: ruta a la imagen del QR de cobro REAL descargado de la app del banco (ej. "images/qr-pago.png").
  // Vacío: se muestra un espacio marcado "QR pendiente". No poner números de cuenta.
  pago: {
    qr: "images/qr-mercantil.png",
    titular: "Bertha Estrada",
    banco: "Banco Mercantil Santa Cruz",
    instrucciones: [
      "Abre la app de tu banco y elige \"Pagar con QR\".",
      "Escanea el código o súbelo desde tu galería.",
      "Escribe el monto de tu alquiler y confirma el pago.",
      "Envía el comprobante por WhatsApp indicando tu nombre, casa y habitación."
    ]
  },

  // ---------- Reglas de alquiler (provisionales: reemplazar por las reales) ----------
  reglas: [
    { titulo: "Depósito", texto: "Se pide un mes de depósito de garantía, que se devuelve al dejar la habitación en buen estado." },
    { titulo: "Pago", texto: "El alquiler se paga por adelantado los primeros 5 días de cada mes." },
    { titulo: "Servicios", texto: "Los servicios incluidos figuran en cada habitación. Los demás se dividen entre inquilinos." },
    { titulo: "Convivencia", texto: "Silencio de 22:00 a 7:00. Visitas hasta las 21:00. No se permite fumar dentro de la casa." },
    { titulo: "Aviso de salida", texto: "Avisar con 30 días de anticipación antes de dejar la habitación." }
  ]
};
