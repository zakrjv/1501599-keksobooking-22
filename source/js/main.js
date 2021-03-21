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
  resetForm, checkPrice
} from './form.js';
import {disablePage, enablePage} from './page-states.js';
import {getData} from './api.js';
import {
  showAlert,
  showSuccessMessage
} from './messages.js';
import {debounce} from './utils.js';
import {
  uploadPhoto,
  resetPhoto,
  createPhoto
} from './showing-pictures.js';

const RERENDER_DELAY = 500;

const templateAd = document.querySelector('#card').content.querySelector('.popup');
const formTimeOfStay = document.querySelector('.ad-form__element--time');
const roomNumber = document.querySelector('#room_number');
const guestNumberCurrent = document.querySelector('#capacity');
const cleaningFormButton = document.querySelector('.ad-form__reset')
const formMap = document.querySelector('.map__filters');

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img')
const housingPhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const previewHousingPhoto = document.querySelector('.ad-form__photo')

const selectType = document.querySelector('#type')
const inputPrice = document.querySelector('#price')


// Открытие страницы
disablePage();
const mainMarker = createMainPinMarker();


// Создание маркеров с данными от сервера
getData().then((arrayAds) => {
  renderPinMarkers(arrayAds, templateAd);
  enablePage();
  setFilterClick(debounce(
    () => renderPinMarkers(arrayAds, templateAd),
    RERENDER_DELAY,
  ));
}).catch(() => {
  showAlert('При загрузке данных с сервера произошла ошибка, перезагрузите страницу')
});


// Фильтрация карты
const setFilterClick = (cb) => {
  formMap.addEventListener('change', () => {
    cb();
  });
}


// Предпросмотр выбранных фотографий
avatarChooser.addEventListener('change', () => {
  uploadPhoto(avatarChooser, previewAvatar);
})
housingPhotoChooser.addEventListener('change', () => {
  const newHousingPhoto = createPhoto(previewHousingPhoto);
  uploadPhoto(housingPhotoChooser, newHousingPhoto);
})


// Синхронизация времени заезда и времени выезда
formTimeOfStay.addEventListener('change', timeChangeHandler);


// Цена и тип жилья
selectType.addEventListener('change', () => {
  checkPrice(inputPrice, selectType);
});

inputPrice.addEventListener('blur', () => {
  checkPrice(inputPrice, selectType);
})


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
  resetPhoto(previewAvatar);
  resetPhoto(previewHousingPhoto);
  resetMarkerPosition(mainMarker);
  showSuccessMessage();
});


// Очистка формы
cleaningFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetPhoto(previewAvatar);
  resetPhoto(previewHousingPhoto);
  resetMarkerPosition(mainMarker);
})

