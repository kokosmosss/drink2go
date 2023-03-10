/*Menu*/

const onenMenu = () => {
  let header = document.querySelector('.header');
  let headerToggle = document.querySelector('.user-menu__toggle');

  header.classList.remove('header--no-js');

  headerToggle.addEventListener('click', function () {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed');
      headerToggle.classList.add('user-menu__toggle--close');
    } else {
      header.classList.add('header--closed');
      headerToggle.classList.remove('user-menu__toggle--close');
    }
  });
}

onenMenu();

/*Slider*/

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

/*Map*/
let mapSection = document.querySelector('.map');
mapSection.classList.remove('map--no-js');

const MAP_LAT = 59.96842;
const MAP_LNG = 30.31755;
const SHOP_LAT = 59.96835;
const SHOP_LNG = 30.31763;
const ZOOM = 18;

const map = L.map('map').setView([MAP_LAT, MAP_LNG], ZOOM);;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "../img/map-pin.svg",
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPin = L.marker(
  {
    lat: SHOP_LAT,
    lng: SHOP_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPin.addTo(map);
