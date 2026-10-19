# Sitio web de Eipy (@soyeipy)

Sitio estático (HTML + CSS + JS, sin compilación) del creador de contenido Anthony Prado, "Eipy".

## Estructura
- `index.html`: página completa (estilos y animaciones con GSAP + ScrollTrigger + Lenis desde CDN).
- `contenido.js`: TODO el contenido editable (números, infomerciales, top virales, portafolio, marcas, link de WhatsApp, lista de previews). Para cambiar textos, orden o videos se edita solo este archivo.
- `img/`: fotos de Anthony. `eipy-01-cut.webp` es el recorte que va delante del nombre en el hero.
- `previews/`: clips de 2–4 s (mp4 sin audio, 360–540 px) + póster jpg. El nombre del archivo = la clave `k` en contenido.js.
- `logos/`: logos de marcas (si existen). En contenido.js, `marcas[].logo` apunta a `logos/<archivo>`.

## Reglas
- No hay build: se publica la carpeta tal cual.
- Al agregar una preview nueva, añadir su clave a `previews` en contenido.js.
- Mantener el estilo: fondo #ECEAE6, tinta #141312, acento #D23A22, Archivo expandida + Geist.
- El usuario se comunica en español y prefiere respuestas directas.

## Despliegue
Hosting estático gratuito (Cloudflare Pages, Vercel o Netlify). Sin comando de build; directorio de salida: raíz.
