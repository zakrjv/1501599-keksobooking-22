import {createObject} from './data.js';
import {
  createMap,
  createPinMarkers,
  createMainPinMarker,
  loadMapImage
} from './map.js';
import {disablePage} from './page-states.js';
import './form.js';

const templateAd = document.querySelector('#card').content.querySelector('.popup');

// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());

// Открытие страницы
disablePage();

const map = createMap();
loadMapImage().addTo(map);
createMainPinMarker(map);
createPinMarkers(similarObjects, templateAd, map);

