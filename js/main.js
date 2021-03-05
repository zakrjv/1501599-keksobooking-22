import {createObject} from './data.js';
import {
  createMap,
  createPinMarkers,
  createMainPinMarker,
  loadMapImage
} from './map.js';
import {
  disableUnavailableGuestQuantity,
  showRoomQuantityError,
  timeChangeHandler
} from './form.js';
import {disablePage} from './page-states.js';

const templateAd = document.querySelector('#card').content.querySelector('.popup');
const formTimeOfStay = document.querySelector('.ad-form__element--time');
const roomNumber = document.querySelector('#room_number');
const guestNumberCurrent = document.querySelector('#capacity');


// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());


// Открытие страницы
disablePage();

const map = createMap();
loadMapImage().addTo(map);
createMainPinMarker(map);
createPinMarkers(similarObjects, templateAd, map);


// Синхронизация времени заезда и времени выезда
formTimeOfStay.addEventListener('change', timeChangeHandler);


// Синхронизация количество комнат и количество мест
roomNumber.addEventListener('change', (evt) => {
  disableUnavailableGuestQuantity(evt.target.value);
  guestNumberCurrent.setCustomValidity('');
  showRoomQuantityError(evt.target.value, guestNumberCurrent);
});

guestNumberCurrent.addEventListener('change', () => {
  guestNumberCurrent.setCustomValidity('');
});
