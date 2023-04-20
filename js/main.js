// Obtener el icono de menú hamburguesa y la lista de enlaces del menú
const hamburguer = document.querySelector('.menu__hamburguer');
const menuLinks = document.querySelector('.menu__links');
const body = document.querySelector('body');

// Agregar un evento de clic al icono de menú hamburguesa
hamburguer.addEventListener('click', () => {
  // Alternar la clase CSS 'menu__links--show' en la lista de enlaces del menú
  menuLinks.classList.toggle('menu__links--show');
});

// Agregar un evento de clic al elemento body
body.addEventListener('click', (event) => {
  const isClickInside = hamburguer.contains(event.target) || menuLinks.contains(event.target);
  if (!isClickInside) {
    menuLinks.classList.remove('menu__links--show');
  }
});

// PARA QUE NO SE CARGUE LA PAGINA CUANDO HAGO CLICK EN UN LINK

  // Selecciona todos los enlaces de la lista de menú y el logo
  const menuLink = document.querySelectorAll('.menu__link');

  // Agrega un evento clic a cada enlace
  menuLink.forEach(link => {
    link.addEventListener('click', e => {
      // Evita que se recargue la página
      e.preventDefault();

      // Obtiene el destino del enlace (el ID de la sección)
      const href = link.getAttribute('href');
      const destino = document.querySelector(href);

      // Desplaza suavemente la página hacia el destino
      destino.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const logoLink = document.querySelector('.menu__logo');

  logoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que la página se recargue al hacer clic en el enlace
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página hacia arriba
  });