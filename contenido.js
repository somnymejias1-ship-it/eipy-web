/* =====================================================================
   CONTENIDO DE LA PÁGINA DE EIPY
   Todo lo que se ve en la página sale de este archivo.
   - Para cambiar el ORDEN: mueve el bloque { ... } completo hacia arriba o abajo.
   - Para QUITAR un video: borra su bloque { ... },
   - Para AGREGAR: copia un bloque, pégalo y cambia los datos.
   - "k" es el nombre corto del video. Su preview es previews/<k>.mp4
   ===================================================================== */

window.EIPY = {

  /* ---------- NÚMEROS ---------- */
  numeros: {
    fecha: "18 de octubre de 2026",
    vistas: 86.7,        // millones
    seguidores: 111,     // miles
    engagement: 7.2,     // % en TikTok
    likesTikTok: "1.7M",
    videos: "837",
    plataformas: [
      { nombre: "Instagram", seguidores: "34.3K", videos: "~340 reels", vistas: "48.3M", valor: 48.3 },
      { nombre: "TikTok",    seguidores: "40.9K", videos: "256 videos", vistas: "23.6M", valor: 23.6 },
      { nombre: "Facebook",  seguidores: "36K",   videos: "~241 reels", vistas: "14.8M", valor: 14.8 }
    ]
  },

  /* ---------- INFOMERCIALES (producción profesional, van destacados) ---------- */
  infomerciales: [
    { k: "info1",     cliente: "JAC San Felipe", titulo: "Plan Facilito: llegó para quedarse", url: "https://www.instagram.com/p/DcKD7ltJxF3/" },
    { k: "info2",     cliente: "VICHO Ultra",    titulo: "¿Te pica eso ahí abajo? 🫣", url: "https://www.instagram.com/p/DcCVl_4hwKe/" },
    { k: "antojitos", cliente: "Antojitos",     titulo: "Los mejores desayunos…", url: "https://www.instagram.com/p/DeE20J2RtyH/" }
  ],

  /* ---------- TOP VIRALES (en el orden en que aparecen) ---------- */
  top: [
    { k: "comer",   titulo: "Hay que comer lo que sea 😩", vistas: "10.4M", fecha: "Jul 2026",
      links: [["ig", "7.8M", "https://www.instagram.com/reel/DalobS5BErH/"], ["tt", "2.6M", "https://www.tiktok.com/@soyeipy/video/7660650635834035474"]] },
    { k: "barrio",  titulo: "El barrio siempre me acompaña 🤣", vistas: "5.5M", fecha: "Ago 2025",
      links: [["ig", "3.8M", "https://www.instagram.com/reel/DN514iyjfpD/"], ["tt", "1.7M", "https://www.tiktok.com/@soyeipy/video/7543678213352951046"]] },
    { k: "falla",   titulo: "A veces uno falla 😭", vistas: "5.3M", fecha: "Oct 2025",
      links: [["ig", "5.3M", "https://www.instagram.com/reel/DPkOVVuDRoS/"]] },
    { k: "cuidado", titulo: "Tengan cuidado por favor 😔", vistas: "5M", fecha: "Ago 2026",
      links: [["ig", "5M", "https://www.instagram.com/reel/DcbZledxWyy/"]] },
    { k: "gracias", titulo: "Gracias Dios 🙌🏽", vistas: "4.8M", fecha: "Jul 2026",
      links: [["tt", "3.8M", "https://www.tiktok.com/@soyeipy/video/7662777461465206034"], ["ig", "1M", "https://www.instagram.com/reel/Da0YpXpRR5m/"]] },
    { k: "pagar2",  titulo: "Tengo que pagar 2?", nota: "Publicidad para Burguer Almendrón", vistas: "4.3M", fecha: "Jul 2025",
      links: [["tt", "2.4M", "https://www.tiktok.com/@soyeipy/video/7531428043521330438"], ["ig", "1.9M", "https://www.instagram.com/reel/DMk3qj9RO3T/"]] },
    { k: "selogro", titulo: "Se logró 🙌🏽", vistas: "2.5M", fecha: "Jul 2026",
      links: [["tt", "2M", "https://www.tiktok.com/@soyeipy/video/7666631457082789127"], ["ig", "486K", "https://www.instagram.com/reel/DbPIx0xshl8/"]] },
    { k: "limpios", titulo: "Destinados a ser unos limpios de por vida? 😂", vistas: "2M", fecha: "Jul 2025",
      links: [["ig", "2M", "https://www.instagram.com/reel/DMxxzW9xj9_/"]] }
  ],

  /* ---------- PORTAFOLIO (tipo: info, pub, sketch, viral) ---------- */
  portafolio: [
    { k: "info1",     tipo: ["info"],          cliente: "JAC San Felipe",    titulo: "Plan Facilito: llegó para quedarse", vistas: "", url: "https://www.instagram.com/p/DcKD7ltJxF3/" },
    { k: "info2",     tipo: ["info"],          cliente: "VICHO Ultra",       titulo: "¿Te pica eso ahí abajo? 🫣", vistas: "", url: "https://www.instagram.com/p/DcCVl_4hwKe/" },
    { k: "antojitos", tipo: ["info", "pub"],   cliente: "Antojitos",         titulo: "Los mejores desayunos…", vistas: "9.3K", url: "https://www.instagram.com/p/DeE20J2RtyH/" },
    { k: "pagar2",    tipo: ["pub", "viral"],  cliente: "Burguer Almendrón", titulo: "Tengo que pagar 2?", vistas: "4.3M", url: "https://www.instagram.com/reel/DMk3qj9RO3T/" },
    { k: "cashea",    tipo: ["pub", "viral"],  cliente: "Cashea",            titulo: "A quien más le pasa? 🫣", vistas: "1.8M", url: "https://www.instagram.com/reel/DbZOOxdBREi/" },
    { k: "polar",     tipo: ["pub", "viral"],  cliente: "Polar Light",       titulo: "Después empezamos la dieta 🫡", vistas: "1.5M", url: "https://www.tiktok.com/@soyeipy/video/7552569451401448716" },
    { k: "tigra",     tipo: ["pub", "viral"],  cliente: "One Rides · TIGRA", titulo: "Primero se come…", vistas: "1.1M", url: "https://www.tiktok.com/@soyeipy/video/7676610698746531090" },
    { k: "vicho1",    tipo: ["pub"],           cliente: "VICHO",             titulo: "Mi papá descubrió que me gusta el vicho 😳", vistas: "512K", url: "https://www.instagram.com/reel/DZtAuHAhvB0/" },
    { k: "perrito",   tipo: ["pub"],           cliente: "Don Perrito SF",    titulo: "😬", vistas: "333K", url: "https://www.instagram.com/reel/Dd99l0AxWwg/" },
    { k: "vicho2",    tipo: ["pub"],           cliente: "VICHO",             titulo: "Sí o no marino? 🤣", vistas: "32.3K", url: "https://www.instagram.com/reel/Dd48FutMJrt/" },
    { k: "kings",     tipo: ["pub"],           cliente: "Kings Donuts SF",   titulo: "Iba a hacer running, pero… donas", vistas: "13.8K", url: "https://www.instagram.com/reel/Dd2hSYHsURR/" },
    { k: "mazopan",   tipo: ["pub"],           cliente: "Mazopán",           titulo: "Uno ya no puede andar solo…", vistas: "10.3K", url: "https://www.instagram.com/reel/Dec5YHPBT6M/" },
    { k: "juan",      tipo: ["pub"],           cliente: "Juan Mecánico",     titulo: "¡No te compliques más en la vía!", vistas: "9.1K", url: "https://www.instagram.com/reel/DefegDgB484/" },
    { k: "barrio",    tipo: ["sketch", "viral"], cliente: "Sketch",          titulo: "El barrio siempre me acompaña 🤣", vistas: "5.5M", url: "https://www.instagram.com/reel/DN514iyjfpD/" },
    { k: "falla",     tipo: ["sketch", "viral"], cliente: "Sketch",          titulo: "A veces uno falla 😭", vistas: "5.3M", url: "https://www.instagram.com/reel/DPkOVVuDRoS/" },
    { k: "limpios",   tipo: ["sketch", "viral"], cliente: "Sketch",          titulo: "Destinados a ser unos limpios de por vida? 😂", vistas: "2M", url: "https://www.instagram.com/reel/DMxxzW9xj9_/" },
    { k: "gregory1",  tipo: ["sketch"],        cliente: "Problema con Gregory", titulo: "Parte 1", vistas: "", url: "https://www.instagram.com/reel/DeQP3n_srKl/" },
    { k: "gregory2",  tipo: ["sketch"],        cliente: "Problema con Gregory", titulo: "Parte 2", vistas: "", url: "https://www.instagram.com/reel/DeRkIz4xF54/" },
    { k: "gregory3",  tipo: ["sketch"],        cliente: "Problema con Gregory", titulo: "Parte 3", vistas: "", url: "https://www.instagram.com/reel/DeRlX0GxCA8/" },
    { k: "comer",     tipo: ["viral"],         cliente: "Viral",             titulo: "Hay que comer lo que sea 😩", vistas: "10.4M", url: "https://www.instagram.com/reel/DalobS5BErH/" },
    { k: "cuidado",   tipo: ["viral"],         cliente: "Viral",             titulo: "Tengan cuidado por favor 😔", vistas: "5M", url: "https://www.instagram.com/reel/DcbZledxWyy/" },
    { k: "gracias",   tipo: ["viral"],         cliente: "Viral",             titulo: "Gracias Dios 🙌🏽", vistas: "4.8M", url: "https://www.instagram.com/reel/Da0YpXpRR5m/" },
    { k: "selogro",   tipo: ["viral"],         cliente: "Viral",             titulo: "Se logró 🙌🏽", vistas: "2.5M", url: "https://www.instagram.com/reel/DbPIx0xshl8/" }
  ],

  /* ---------- MARCAS (logo: ruta del archivo en logos/, o null para mostrar el nombre) ---------- */
  marcas: [
    { nombre: "Burguer Almendrón", logo: null },
    { nombre: "Cashea",            logo: null },
    { nombre: "Polar Light",       logo: null },
    { nombre: "JAC San Felipe",    logo: null },
    { nombre: "One Rides · TIGRA", logo: null },
    { nombre: "VICHO",             logo: null },
    { nombre: "Don Perrito SF",    logo: null },
    { nombre: "Mazopán",           logo: null },
    { nombre: "Kings Donuts SF",   logo: null },
    { nombre: "Antojitos",         logo: null }
  ],

  /* Link de WhatsApp del botón "Contacta ahora" */
  whatsapp: "https://wa.link/70b3xs",

  /* Videos que ya tienen preview recortada (lo actualiza Claude) */
  previews: ["info1","info2","antojitos","barrio","cashea","comer","cuidado","falla","gracias","gregory1","gregory2","juan","kings","limpios","mazopan","pagar2","perrito","polar","selogro","tigra","vicho2"]
};
