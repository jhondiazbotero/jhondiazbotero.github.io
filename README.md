# Web personal de Jhon Díaz Botero

Código de <https://jhondiazbotero.github.io>: quién soy, con qué trabajo y cómo trabajo.

Es una página hecha a mano con HTML, CSS y JavaScript propios, sin framework, sin paso de compilación y sin dependencias externas. Las fuentes se sirven desde el mismo sitio.

## Cómo verla en local

```bash
python3 -m http.server 4322 --bind 127.0.0.1 --directory .
```

Luego abre <http://127.0.0.1:4322/>.

## Estructura

```
index.html                 Página completa
404.html                   Página para enlaces que no existen
favicon.svg                Símbolo </>
assets/css/estilos.css     Estilos (modo oscuro, responsive, movimiento reducido)
assets/js/sitio.js         Menú compacto y sección activa en la navegación
assets/fonts/              Red Hat Display y Manrope en woff2 con sus licencias
assets/og-image.png        Imagen 1200x630 para compartir el enlace
herramientas/og-image.html Plantilla de la imagen para compartir
```

## Detalles técnicos

- Diseño desde 1366x768 hasta celular, sin scroll horizontal.
- Contraste AA, foco visible con teclado y enlace para saltar al contenido.
- Respeta `prefers-reduced-motion`: sin animaciones para quien las tenga desactivadas.
- Fuentes con `font-display: optional` y precarga, para que la página no se mueva al cargar (CLS 0).
- Funciona sin JavaScript; el script solo agrega el menú compacto y marca la sección activa.

## Fuentes y licencias

| Uso | Fuente | Licencia |
|---|---|---|
| Titulares | Red Hat Display | SIL OFL 1.1 (`assets/fonts/OFL-RedHatDisplay.txt`) |
| Texto | Manrope | SIL OFL 1.1 (`assets/fonts/OFL-Manrope.txt`) |
| Datos | Monoespaciada del sistema | No se descarga |

## Versiones

- **v1** (noviembre de 2026): primera versión.
