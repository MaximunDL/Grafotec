ScrollReveal().reveal('.banner', { delay: 250 });
ScrollReveal().reveal('.smallimg', { delay: 250 });
ScrollReveal().reveal('.contenedor-cards', { delay: 250 });
ScrollReveal().reveal('.servicio', { delay: 350 });
ScrollReveal().reveal('.clientes-img1', { delay: 250 });
ScrollReveal().reveal('.clientes-img', { delay: 250 });
ScrollReveal().reveal('.Contactenos-te', { delay: 250 });
ScrollReveal().reveal('.Contactenos-et', { delay: 250 });
ScrollReveal().reveal('.contactenos-text', { delay: 250 });
ScrollReveal().reveal('.contactenos', { delay: 250 });
ScrollReveal().reveal('.pilares', { delay: 250 });

let images = document.querySelectorAll('.banner-images-container img');
let index = 0;
let bannerText = document.querySelector('.banner-text');
let subText = document.querySelector('.banner-subtext');
let btnText = document.querySelector('.btn');
let textArray = [
  {
    heading: 'IMPRESIONES DE <br> ALTA CALIDAD',
    subheading: 'Profesionales en la producción.',
    buttonLink: '{% url "servicio" %}',
    buttonText: 'NUESTROS SERVICIOS',
  },
  {
    heading: 'TUS IDEAS <br> EN IMPRESIONES <br> ÚNICAS',
    subheading: 'Impresiones personalizadas.',
    buttonLink: '{% url "about" %}',
    buttonText: 'CÓNOCENOS',
  },
  {
    heading: 'DEJA TODO EN <br> NUESTRAS MANOS',
    subheading: 'Nos encargamos de principio a <br> fin en la realización de tus proyectos.',
    buttonLink: '{% url "contact" %}',
    buttonText: 'CONSIGUE UNA COTIZACIÓN',
  }
];

setInterval(function () {
  images[index].classList.remove('active');
  bannerText.innerHTML = textArray[index].heading ;
  subText.innerHTML = textArray[index].subheading;
  btnText.innerHTML = textArray[index].buttonText;
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 5000);


const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('navbar');
});