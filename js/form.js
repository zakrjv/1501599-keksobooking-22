import {showFailedDispatch} from './messages.js'
import {sendData} from './api.js'

const MINIMUM_PRICE = {
  palace: '10000',
  flat: '1000',
  bungalow: '0',
  house: '5000',
};
const AVAILABLE_GUEST_QUANTITY = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const formAd = document.querySelector('.ad-form');
const filtresMap = document.querySelector('.map__filters');

const checkingTime = document.querySelector('#timein');
const checkoutTime = document.querySelector('#timeout');

const guestNumberOptions = document.querySelector('#capacity').children;


// Цена
const checkPrice = (price, housingType) => {
  price.placeholder = MINIMUM_PRICE[housingType.value];

  if (+price.value < +MINIMUM_PRICE[housingType.value]) {
    price.setCustomValidity(`Цена от ${MINIMUM_PRICE[housingType.value]}`);
  } else {
    price.setCustomValidity('');
  }
  
  price.reportValidity();
}


// Время заезда и время выезда
const timeChangeHandler = (evt) => {
  if (evt.target.matches('select')) {
    checkoutTime.value = evt.target.value;
    checkingTime.value = evt.target.value;
  }
}


// Количество комнат и количество мест
const disableUnavailableGuestQuantity = (roomQuantity) => {
  const availableGuestQuantity = AVAILABLE_GUEST_QUANTITY[roomQuantity];
  for (let i = 0; i < guestNumberOptions.length; i++) {
    guestNumberOptions[i].disabled = !availableGuestQuantity.includes(guestNumberOptions[i].value);
  }
}

const showRoomQuantityError = (roomQuantity, guestSelect) => {
  const availableGuestQuantity = AVAILABLE_GUEST_QUANTITY[roomQuantity];

  if (!availableGuestQuantity.includes(guestSelect.value)) {
    guestSelect.setCustomValidity('Количество гостей не соответствует количеству комнат.');
    guestSelect.reportValidity();
  }
};


// Сброс форм
const resetForm = () => {
  formAd.reset();
  filtresMap.reset();
}


// Отправка данных
const submitHandler = (onSuccess) => {
  formAd.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showFailedDispatch(),
      new FormData(evt.target),
    );
  });
};


export {
  timeChangeHandler,
  disableUnavailableGuestQuantity,
  showRoomQuantityError,
  submitHandler,
  resetForm,
  checkPrice
}
