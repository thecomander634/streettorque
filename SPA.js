$(document).ready(function() {
  // Ocultar todas las secciones al inicio
  $("[data-section]").hide();

  // Mostrar solo la sección de inicio
  $("#home-section").show();

  // Cuando se hace clic en un enlace del menú o botón
  $("[data-target]").on("click", function(evento) {
    // Evita que el enlace recargue la página
    evento.preventDefault();

    // Obtener el valor de data-target (ej: "events-section")
    var destino = $(this).attr("data-target");

    // Ocultar todas las secciones
    $("[data-section]").hide();

    // Mostrar solo la sección seleccionada
    $("#" + destino).show();

    // Subir arriba al cambiar de sección
    window.scrollTo(0, 0);
  });
});
