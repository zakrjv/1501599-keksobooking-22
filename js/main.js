import {
  renderPinMarkers,
  createMainPinMarker,
  resetMarkerPosition
} from './map.js';
import {
  disableUnavailableGuestQuantity,
  showRoomQuantityError,
  timeChangeHandler,
  submitHandler,
  resetForm
} from './form.js';
import {disablePage, enablePage} from './page-states.js';
import {getData} from './api.js';
import {
  showAlert,
  showSuccessMessage
} from './messages.js';
import './filtration.js'

const templateAd = document.querySelector('#card').content.querySelector('.popup');
const formTimeOfStay = document.querySelector('.ad-form__element--time');
const roomNumber = document.querySelector('#room_number');
const guestNumberCurrent = document.querySelector('#capacity');
const cleaningFormButton = document.querySelector('.ad-form__reset')
const formMap = document.querySelector('.map__filters');


// Открытие страницы
disablePage();
const mainMarker = createMainPinMarker();


// Создание маркеров с данными от сервера
getData().then((arrayAds) => {
  renderPinMarkers(arrayAds, templateAd);
  enablePage();
  setTypeClick(() => renderPinMarkers(arrayAds, templateAd));
}).catch(() => {
  showAlert('При загрузке данных с сервера произошла ошибка, перезагрузите страницу')
});

// Фильтрация карты
const setTypeClick = (cb) => {
  formMap.addEventListener('change', () => {
    cb();
  });
}


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


// Отправка данных
submitHandler(() => {
  resetForm();
  resetMarkerPosition(mainMarker);
  showSuccessMessage();
});


// Очистка формы
cleaningFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMarkerPosition(mainMarker);
})

