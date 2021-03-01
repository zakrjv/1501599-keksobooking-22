import {createAd} from './similar-ads.js'
import {enablePage} from './page-states.js'

/* global L:readonly */

const COORDINATES_INITIAL = {
  lat: 35.683613,
  lng: 139.753637,
}


// Поле вывода координат

const addressInput = document.querySelector('#address');
addressInput.value = `${COORDINATES_INITIAL.lat.toFixed(5)}, ${COORDINATES_INITIAL.lng.toFixed(5)}`;

// Создание карты

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage();
  })
  .setView({
    lat: COORDINATES_INITIAL.lat,
    lng: COORDINATES_INITIAL.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// Главная метка

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: COORDINATES_INITIAL.lat,
    lng: COORDINATES_INITIAL.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// Перемещение главной метки
mainPinMarker.on('moveend', (evt) => {
  const coordinatesMarker = evt.target.getLatLng()
  addressInput.value = `${coordinatesMarker.lat.toFixed(5)}, ${coordinatesMarker.lng.toFixed(5)}`;
});


// Обычные метки

const createMarkers = (array) => {
  const templateAd = document.querySelector('#card').content.querySelector('.popup');
  array.forEach((ad) => {
    const ordinaryPinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [48, 48],
      iconAnchor: [24, 48],
    });

    const ordinaryPinMarker = L.marker(
      {
        lat: ad.location.x,
        lng: ad.location.y,
      },
      {
        icon: ordinaryPinIcon,
      },
    );

    ordinaryPinMarker
      .addTo(map)
      .bindPopup(
        createAd(ad, templateAd),
        {
          keepInView: true,
        },
      );
  });
};

export {createMarkers};
