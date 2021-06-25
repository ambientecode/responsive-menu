const buttonResponsiveMenu = document.querySelector('.btn-responsive-menu');
const responsiveMenu = document.querySelector('.responsive-menu');
buttonResponsiveMenu.addEventListener('click', function(event) {
    event.preventDefault();
    responsiveMenu.classList.toggle('d-block');
});