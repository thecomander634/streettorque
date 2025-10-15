StreetTorque Garage — Web estática (Bootstrap 5)

Sitio estático de temática tuning & detailing construido con Bootstrap 5.
Incluye 4 páginas: index.html, events.html, contact.html y registro.html.

Estructura
/ (raíz)
├─ index.html        # Portada con hero y productos destacados
├─ events.html       # Tabla de quedadas, rutas y meets
├─ contact.html      # Formulario de contacto
├─ registro.html     # Formulario de inscripción a eventos
└─ README.md


Las imágenes se cargan desde U archivos locales (carpeta images/).

Tecnologías

HTML5 + CSS

Bootstrap 5.3 (CDN)

Google Fonts: Open Sans

Páginas incluidas
index.html

Navbar con enlaces a todas las páginas y botón Inscribirme.

Hero con texto y CTA a Eventos.

Sección Destacados: 3 cards con imagen, descripción y precio.

events.html

Tabla responsive con: Fecha, Hora, Evento, Nivel, Ubicación, Precio, Plazas.

Botón Apuntarme que abre registro.html y pasa el nombre del evento en la query (?evento=Nombre).

contact.html

Formulario con campos: Nombre, Email, Motivo (select), Mensaje y aceptación de privacidad.

Bloque con datos de ubicación/horario/teléfono (texto).

registro.html

Formulario: Nombre, Apellidos, Email, Teléfono, Evento, Fecha, Asistentes, Términos.

Script que rellena Evento si vienes desde events.html con ?evento=....

Estilo

Color primario configurable mediante la variable --stq-primary (por defecto #ED6E12).

Botones redondeados (rounded-4), cards con sombra suave y cabeceras de tabla destacadas.

Tipografía base Open Sans.



Personalización

Color corporativo: busca --stq-primary en la etiqueta <style> de cada página y cambia el valor.

Imágenes: sustituye los src por rutas locales y crea la carpeta img/.

Tipografía: cambia el <link> de Google Fonts y actualiza --bs-body-font-family.
🖋️ Tipografía base: Open Sans (Google Fonts). for-the-tahoma-ms-posters-4
![for-the-tahoma-ms-posters-4](https://github.com/user-attachments/assets/ab99466f-7121-4902-b422-8b3d15a187e3)
🎨 PALETA
https://coolors.co/707070-000000-ffffff-555555-844315


Accesibilidad

Todas las imágenes llevan alt.

Formularios con label asociados y campos required.

Contraste suficiente en botones y cabeceras.

Navegación

Inicio → index.html

Eventos → events.html/secondary.html se accede dandole a productos

Contacto → contact.html se accede desde el footer de index.html, al hacer click en la etiqueta <a> de contacto.

Registro → registro.html al hacer click en unete, dentro de la tarjeta grande en index, te lleva a una pagina independiente de registro.

