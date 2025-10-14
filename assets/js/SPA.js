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

$("nav form").on("submit", function(evento) {
  evento.preventDefault(); // evita que recargue la página

  // Obtener texto del buscador y pasarlo a mayúsculas
  var textoBusqueda = $("nav input[type='search']").val().trim().toUpperCase();

  // Mostrar la sección de productos
  $("[data-section]").hide();
  $("#events-section").show();

  // Si no se escribió nada, mostrar todas las cards
  if (textoBusqueda === "") {
    $("#events-section .card").show();
    return;
  }

  // Recorrer todos los h5 de las cards
  $("#events-section .col-sm-6, #events-section .col-lg-3").each(function() {
    var titulo = $(this).find("h5").text().toUpperCase();

    // Si el texto del h5 contiene lo buscado → mostrar, si no → ocultar
    if (titulo.includes(textoBusqueda)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  // Subir arriba después de filtrar
  window.scrollTo(0, 0);
});