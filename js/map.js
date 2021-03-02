import {createAd} from './similar-ads.js'
import {enablePage} from './page-states.js'

/* global L:readonly */

const COORDINATES_INITIAL = {
  lat: 35.683613,
  lng: 139.753637,
}

// Создание карты
const createMap = () => {
  return L.map('map-canvas')
    .on('load', () => {
      enablePage();
    })
    .setView({
      lat: COORDINATES_INITIAL.lat,
      lng: COORDINATES_INITIAL.lng,
    }, 10);
};

// Добавляет изображение карты
const loadMapImage= () => {
  return L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  );
}

// Функция добавления главной метки
const createMainPinMarker = (map) => {
  // Поле вывода координат
  const addressInput = document.querySelector('#address');
  addressInput.value = `${COORDINATES_INITIAL.lat.toFixed(5)}, ${COORDINATES_INITIAL.lng.toFixed(5)}`;

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

};

// Обычные метки
const createPinMarkers = (array, template, map) => {
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
        createAd(ad, template),
        {
          keepInView: true,
        },
      );
  });
};

export {
  createMap,
  createMainPinMarker,
  createPinMarkers,
  loadMapImage
};


