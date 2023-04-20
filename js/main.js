// Obtener el icono de menú hamburguesa y la lista de enlaces del menú
const hamburguer = document.querySelector('.menu__hamburguer');
const menuLinks = document.querySelector('.menu__links');

// Agregar un evento de clic al icono de menú hamburguesa
hamburguer.addEventListener('click', () => {
  // Alternar la clase CSS 'menu__links--show' en la lista de enlaces del menú
  menuLinks.classList.toggle('menu__links--show');
});