const MINIMUM_PRICE = {
  palace: '10000',
  flat: '1000',
  bungalow: '0',
  house: '5000',
};

const selectType = document.querySelector('#type')
const inputPrice = document.querySelector('#price')
const checkingTime = document.querySelector('#timein');
const checkoutTime = document.querySelector('#timeout');

inputPrice.placeholder = MINIMUM_PRICE[selectType.value];

selectType.addEventListener('change', () => {
  inputPrice.value = MINIMUM_PRICE[selectType.value];
  inputPrice.min = MINIMUM_PRICE[selectType.value];
});

// Время заезда и время выезда

// checkingTime.addEventListener('change', () => {
//   checkoutTime.value = checkingTime.value;
// });
//
// checkoutTime.addEventListener('change', () => {
//   checkingTime.value = checkoutTime.value;
// });

// Добавила делегирование (хотелось бы узнать, есть ли смысл тут сделать так?)
const formTimeOfStay = document.querySelector('.ad-form__element--time');

const timeChangeHandler = function (evt) {
  if (evt.target.matches('select')) {
    checkoutTime.value = evt.target.value;
    checkingTime.value = evt.target.value;
  }
}

formTimeOfStay.addEventListener('change', timeChangeHandler);
