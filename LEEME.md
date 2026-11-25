# Web personal de Jhon Díaz Botero

Portafolio de una sola página, hecho a mano con HTML, CSS y JavaScript propios. Sin framework, sin paso de compilación y sin dependencias externas: ni Google Fonts ni CDN. Todo se sirve desde el mismo sitio.

Se publicará más adelante en GitHub Pages como <https://jhondiazbotero.github.io/>. Este repositorio todavía no tiene remoto.

## Cómo verlo en local

Desde la carpeta del repositorio:

```bash
python3 -m http.server 4322 --bind 127.0.0.1 --directory .
```

Después abre <http://127.0.0.1:4322/>. El favicon y la página 404 usan rutas desde la raíz (`/favicon.svg`, `/assets/...`), así que conviene servir la carpeta como raíz del sitio, como hace GitHub Pages para un sitio de usuario.

## Estructura

```
index.html                 Página completa (todas las secciones)
404.html                   Página para enlaces que no existen
favicon.svg                Símbolo </> con el degradado del banner
assets/css/estilos.css     Estilos (modo oscuro, responsive, movimiento reducido)
assets/js/sitio.js         Menú compacto y sección activa en la navegación
assets/fonts/              Red Hat Display y Manrope en woff2 + licencias OFL
assets/og-image.png        Imagen 1200x630 para compartir (Open Graph)
herramientas/og-image.html Plantilla desde la que se generó la imagen anterior
LEEME.md                   Este archivo
```

Secciones de `index.html`: inicio, sobre mí, qué hago, con qué trabajo (stack), trayectoria, cómo trabajo, IA aplicada con control, formación y cursos, contacto.

## Identidad visual

Sale del banner de la portada de GitHub (`jhondiazbotero/assets/banner.svg`): fondo azul noche (`#0b1220` y `#111c33`), texto claro (`#f8fafc`, `#cbd5e1` y `#94a3b8`), rejilla de 40 px, barra vertical de acento y el símbolo `</>`. El degradado `#38bdf8` a `#818cf8` se usa solo en remates: barras cortas, línea de la trayectoria, puntos, subrayados y el símbolo. La tipografía monoespaciada es la del sistema y solo aparece en datos (stack, fechas, direcciones). Solo hay modo oscuro.

## Fuentes y licencias

| Uso | Fuente | Archivo | Licencia |
|---|---|---|---|
| Titulares | Red Hat Display (variable, pesos 500 a 800) | `assets/fonts/red-hat-display-var.woff2` | SIL OFL 1.1, `assets/fonts/OFL-RedHatDisplay.txt` |
| Texto | Manrope (variable, pesos 400 a 700) | `assets/fonts/manrope-var.woff2` | SIL OFL 1.1, `assets/fonts/OFL-Manrope.txt` |
| Datos | Pila monoespaciada del sistema (`ui-monospace`, Cascadia Code, Consolas...) | no se descarga nada | n/a |

Los woff2 salen de los TTF variables originales: se limitó el rango de pesos y se recortó el conjunto de caracteres a latín y latín ampliado, con `fontTools` (`instancer` y `pyftsubset`). Las fuentes se declaran con `font-display: optional` y se precargan: si tardaran en llegar, esa visita usa la fuente del sistema y el diseño no se mueve (CLS 0). `font-size-adjust: from-font` mantiene el tamaño visual de la fuente de respaldo.

No se usan Sora ni Cinzel (son de otras marcas).

## Reglas no aplicadas y por qué

Cuando una regla de las skills chocó con las reglas de Jhon, mandaron las de Jhon.

- **Una pantalla por sección a 1440x900** (Taste): no se aplica. El diseño parte de 1366x768 y cada sección tiene la altura que pide su contenido. Solo el inicio llena la primera pantalla.
- **Kit de Taste** (`starter.html`, `system.css`, motion, dealers y `gate.mjs` con sus comprobaciones): no se copió ni se corrió. El CSS y el JS son propios y la verificación se hizo con Playwright, `impeccable detect` y el revisor de texto.
- **Fotografías, iconos de productos reales y tarjetas de diagrama** (Taste): no se usan. No hay fotos de Jhon para publicar, no se inventan ni se usan de archivo, y no se ponen logos de terceros. El único icono es una flecha monocroma dibujada en SVG.
- **Sin violeta ni lavanda** (Taste): el degradado del banner de Jhon termina en `#818cf8`, un índigo claro. Se mantiene porque la identidad visual aprobada manda.
- **Fuentes de Google** (`impeccable font-fetch`): no se usan. Las fuentes salen de los archivos con licencia OFL de la skill `jb-personal`.
- **Entrevista de `impeccable init` y PRODUCT.md**: no se hizo, porque este trabajo corre como subagente sin una persona que responda. El contexto salió del encargo y no se escribió PRODUCT.md ni DESIGN.md.
- **Guía de menú de `modern-web-guidance`** (`navbar`): el menú compacto usa un botón con `aria-expanded`, `inert` y un punto de corte fijo a 1060 px, no un popover nativo con medición en JavaScript. Funciona con teclado (Escape cierra y devuelve el foco) y sin JavaScript la lista queda a la vista. La sección activa usa `IntersectionObserver`, no `scroll-target-group` (solo Chromium).
- **Rejilla de fondo** (aviso `codex-grid-background` de impeccable, que no cuenta como fallo): se conserva porque es la rejilla del banner de Jhon.
- **Nueva versión de impeccable (4.11.0) y de modern-web-guidance**: no se actualizaron durante este trabajo.

Sí se aplicaron: sin eyebrows ni numeración de secciones, sin texto con degradado, sin tarjetas iguales como estructura, un solo momento animado (la entrada del inicio con el trazo de `</>`) y una línea de trayectoria que avanza con el scroll (solo en navegadores que lo soportan y con movimiento permitido), hover y pulsación en botones y enlaces, y todo en reposo con `prefers-reduced-motion`.

## Contenido

Todo el texto sale de la hoja de vida resumida y de las bios aprobadas por Jhon. No hay nombres de empleadores ni de clientes (se dice «empresas privadas y algunas entidades públicas»), ni correo, ni teléfono, ni dirección. El contacto es solo LinkedIn y GitHub. No hay formularios, testimonios ni cifras fuera de «más de 8 años» y las fechas.

## Pruebas hechas en esta versión

- Capturas del primer pantallazo y de la página completa a 1366x768, 1920x1080, 768x1024 y 390x844, y del menú abierto en tablet y celular. Se guardan fuera del repositorio.
- `scrollWidth` igual a `innerWidth` en 16 anchos entre 320 y 2560 px, sin elementos que se salgan.
- `impeccable detect` sobre la carpeta y `detect --viewport` sobre la página servida (1366x768, 1920x1080, 768x1024 y 390x844): 0 hallazgos.
- Contraste AA calculado para cada texto a 1366 y 390 px, CLS 0, sin errores ni avisos en consola, una sola `h1`, foco visible con teclado, enlaces externos con `rel="noopener noreferrer"`, `prefers-reduced-motion` respetado y revisor de texto (`humanizar`) en 0 errores y 0 avisos.

## Historial de versiones

### v1

Primera versión de la web personal: inicio con botones a LinkedIn y GitHub, sobre mí, qué hago, stack, trayectoria por cargos y años, cómo trabajo, IA aplicada con control, formación y cursos, y contacto. Incluye favicon, imagen para compartir, página 404, menú compacto y soporte de movimiento reducido.
