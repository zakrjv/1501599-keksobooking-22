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

const selectType = document.querySelector('#type')
const inputPrice = document.querySelector('#price')

const checkingTime = document.querySelector('#timein');
const checkoutTime = document.querySelector('#timeout');

const guestNumberOptions = document.querySelector('#capacity').children;


// Цена

inputPrice.placeholder = MINIMUM_PRICE[selectType.value];

selectType.addEventListener('change', () => {
  inputPrice.value = MINIMUM_PRICE[selectType.value];
  inputPrice.min = MINIMUM_PRICE[selectType.value];
});


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


export {
  timeChangeHandler,
  disableUnavailableGuestQuantity,
  showRoomQuantityError
}
