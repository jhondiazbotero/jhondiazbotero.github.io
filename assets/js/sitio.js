/* Comportamiento mínimo: menú en pantallas pequeñas y sección activa en la navegación. */
(function () {
  'use strict';

  var boton = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu-principal');
  if (!boton || !menu) return;

  var consulta = window.matchMedia('(max-width: 1060px)');

  function abrir(estado) {
    boton.setAttribute('aria-expanded', String(estado));
    menu.classList.toggle('abierto', estado);
    // Fuera de la vista, los enlaces no deben recibir foco con el teclado
    if (consulta.matches) {
      if (estado) { menu.removeAttribute('inert'); } else { menu.setAttribute('inert', ''); }
    } else {
      menu.removeAttribute('inert');
    }
  }

  function ajustar() {
    if (consulta.matches) { abrir(false); } else { abrir(false); menu.removeAttribute('inert'); }
  }
  ajustar();
  if (consulta.addEventListener) { consulta.addEventListener('change', ajustar); }

  boton.addEventListener('click', function () {
    abrir(boton.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a') && consulta.matches) abrir(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      abrir(false);
      boton.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (consulta.matches && !e.target.closest('.cabecera') && boton.getAttribute('aria-expanded') === 'true') {
      abrir(false);
    }
  });

  // Marca en la navegación la sección que se está leyendo
  var enlaces = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));
  var porId = {};
  enlaces.forEach(function (a) { porId[a.getAttribute('href').slice(1)] = a; });

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        enlaces.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = porId[entrada.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(porId).forEach(function (id) {
      var seccion = document.getElementById(id);
      if (seccion) observador.observe(seccion);
    });
  }
})();
