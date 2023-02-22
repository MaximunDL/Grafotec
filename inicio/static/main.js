ScrollReveal().reveal('.banner', { delay: 250 });
ScrollReveal().reveal('.info', { delay: 250 });
ScrollReveal().reveal('.contenedor-cards', { delay: 250 });
ScrollReveal().reveal('.servicio', { delay: 350 });
ScrollReveal().reveal('.clientes-img', { delay: 250 });
ScrollReveal().reveal('.Contactenos-te', { delay: 250 });
ScrollReveal().reveal('.Contactenos-et', { delay: 250 });
ScrollReveal().reveal('.contactenos-text', { delay: 250 });
ScrollReveal().reveal('.contactenos', { delay: 250 });
ScrollReveal().reveal('.pilares', { delay: 250 });

let images = document.querySelectorAll('.banner-images-container img');
let index = 0;
let bannerText = document.querySelector('.banner-text');
let textArray = ['DEJA TODO EN <br> NUESTRAS MANOS', 'IMPRESIONES DE <br> ALTA CALIDAD', 'TRANSFORMAMOS TUS <br>IDEAS EN <br>IMPRESIONES ÚNICAS'];

setInterval(function () {
  images[index].classList.remove('active');
  bannerText.innerHTML = textArray[index];
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000);


const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('navbar');
});