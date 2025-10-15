# 🏎️ StreetTorque Garage — Web SPA (Bootstrap 5 + jQuery)

Sitio estático de temática **tuning & detailing**, construido con **Bootstrap 5** y convertido en una **Single Page Application (SPA)** con jQuery.

Incluye **4 secciones** dentro de un único `index.html`: Inicio, Productos, Contacto y Registro.

---

## 📂 Estructura

/ (raíz)
├─ index.html # Página única con todas las secciones (SPA)
├─ styles/
│ └─ styles.css # Estilos personalizados
├─ assets/
│ └─ images/ # Imágenes locales
├─ SPA.js # Script principal de navegación y buscador
└─ README.md

yaml
Copiar código

---

## ⚙️ Tecnologías

- 🧱 **HTML5 + CSS3**
- 🎨 **Bootstrap 5.3 (CDN)**
- ⚡ **jQuery 3.7.1**
- ✍️ **Google Fonts:** Open Sans

---

## 🧱 Estructura de la SPA

Cada parte del sitio está dentro de `index.html` y se muestra dinámicamente:

| Sección | ID / Data-target | Descripción |
|----------|------------------|--------------|
| 🏠 Inicio | `home-section` | Portada con hero y productos destacados |
| 🛠️ Productos | `events-section` | Catálogo de piezas y kits tuning |
| ✉️ Contacto | `contact-section` | Datos de contacto, redes sociales y mapa |
| 🧾 Registro | `register-section` | Formulario de alta de usuario |

---

## 🧠 Funcionamiento del `SPA.js`

El script controla la navegación y visibilidad de las secciones sin recargar la página:

- Usa los atributos `data-target` y `data-section` para **mostrar una sola sección** a la vez.  
- Oculta todas las secciones al inicio excepto `#home-section`.  
- Muestra u oculta el **buscador del navbar** según la sección:
  - 🔍 Solo visible en **Productos (`#events-section`)**.
- Permite moverse entre secciones sin recargar la página.

---

## 🔍 Buscador dinámico

El buscador del navbar **filtra los productos** dentro de la sección de eventos (`#events-section`).

### Funcionamiento:
1. El usuario escribe un término y pulsa **Buscar**.  
2. La SPA muestra la sección de productos.  
3. Se comparan los textos de los títulos `<h5>` de las tarjetas (`.card`).  
4. Solo se muestran las cards que **contienen el texto buscado** (sin importar mayúsculas/minúsculas).  
5. Si el campo está vacío, se vuelven a mostrar todas las tarjetas.

### Detalles técnicos:
- Se filtran las **columnas completas** (`.col-sm-6`, `.col-lg-3`) para mantener el grid sin huecos.  
- La comparación se hace con `toUpperCase()` para ignorar el uso de mayúsculas.

---

## 🎨 Estilo

- 🎨 Color primario configurable: `--bs-primary` (`#844315` por defecto).  
- 💡 Cards con sombra suave y botones personalizados.  
- 🖋️ Tipografía base: **Open Sans** (Google Fonts).
![for-the-tahoma-ms-posters-4](https://github.com/user-attachments/assets/abb74319-901d-45a3-98da-f7c25b2448ec)
  # 🎨 PALETA
- https://coolors.co/707070-000000-ffffff-555555-844315

---

## 🧩 Personalización rápida

| Elemento | Dónde cambiar |
|-----------|----------------|
| 🎨 Color corporativo | Variable `--bs-primary` en `<style>` |
| 🖼️ Imágenes | Carpeta `/assets/images/` |
| ✍️ Tipografía | Enlace de Google Fonts en el `<head>` |

---

## ♿ Accesibilidad

- Todas las imágenes incluyen atributo `alt`.  
- Formularios con etiquetas `label` asociadas.  
- Contraste adecuado en botones y encabezados.  

---

## 🚀 Navegación del sitio

| Opción del menú | Acción |
|------------------|--------|
| 🏠 **Inicio** | Muestra `#home-section` |
| 🛠️ **Productos** | Muestra `#events-section` |
| ✉️ **Contacto** | Muestra `#contact-section` |
| 🧾 **Registro** | Muestra `#register-section` |
|  **BUSCADOR** | para resetear refrescar página |

---

© **StreetTorque Garage — Tuning & Detailing**  
Diseño y desarrollo web con ❤️ usando **Bootstrap + jQuery**
