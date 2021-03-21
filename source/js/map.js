import {createAd} from './similar-ads.js'
import {filtrationAds} from './filtration.js'

/* global L:readonly */

const COORDINATES_INITIAL = {
  lat: 35.683613,
  lng: 139.753637,
}
const SIMILAR_ADS_COUNT = 10;

const addressInput = document.querySelector('#address');

// Начальное заполнение поля с координатами
const addInitialCoordinates = () => {
  addressInput.value = `${COORDINATES_INITIAL.lat.toFixed(5)}, ${COORDINATES_INITIAL.lng.toFixed(5)}`;
}

// Создание карты
const map = L.map('map-canvas')
  .on('load', () => {
    addInitialCoordinates();
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

// Функция добавления главной метки
const createMainPinMarker = () => {

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [54, 54],
    iconAnchor: [27, 54],
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

  mainPinMarker.addTo(map).setZIndexOffset(100);

  // Перемещение главной метки
  mainPinMarker.on('moveend', (evt) => {
    const coordinatesMarker = evt.target.getLatLng()
    addressInput.value = `${coordinatesMarker.lat.toFixed(5)}, ${coordinatesMarker.lng.toFixed(5)}`;
  });

  return mainPinMarker;
};

// Сброс позиции маркера
const resetMarkerPosition = (marker) => {
  marker.setLatLng(COORDINATES_INITIAL);
  addInitialCoordinates();
}

// Обычные метки
const markersLayer = new L.LayerGroup();

const renderPinMarkers = (array, template) => {
  markersLayer.clearLayers();
  array
    .filter(filtrationAds)
    .slice(0, SIMILAR_ADS_COUNT)
    .forEach((ad) => {
      const ordinaryPinIcon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [48, 48],
        iconAnchor: [24, 48],
      });

      const ordinaryPinMarker = L.marker(
        {
          lat: ad.location.x || ad.location.lat,
          lng: ad.location.y || ad.location.lng,
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
      markersLayer.addLayer(ordinaryPinMarker);
    });
  markersLayer.addTo(map);
};


export {
  createMainPinMarker,
  renderPinMarkers,
  resetMarkerPosition
};


