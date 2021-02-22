import {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayUnique
} from './utils.js';

const TITLE = ['Заголовок предложения 1', 'Заголовок предложения 2', 'Заголовок предложения 3'];
const DESCRIPTION = ['Описание помещения 1', 'Описание помещения 2', 'Описание помещения 3'];

const TYPES_OF_HOUSE = ['palace', 'flat', 'bungalow', 'house'];

const TYPES_OF_HOUSE_RU = {
  palace: 'Дворец',
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
};

const FEATURES_OF_HOUSE = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIME_CHECKIN_CHECKOUT = ['12:00', '13:00', '14:00'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const AVATAR_IMG = {
  url: 'img/avatars/user',
  formatImg: '.png',
}

const X = {
  min: 35.65,
  max: 35.7,
}
const Y = {
  min: 139.7,
  max: 139.8,
}


// Функция, которая создаёт объект

const createObject = () => {
  const locationX = getRandomFloat(X.min, X.max, 5);
  const locationY = getRandomFloat(Y.min, Y.max, 5);
  return {
    author: {
      avatar: AVATAR_IMG.url + '0' + getRandomInteger(1, 8).toString() + AVATAR_IMG.formatImg,
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: locationX.toString() + ', ' + locationY.toString(),
      price: getRandomInteger(1, 1e4),
      type: TYPES_OF_HOUSE_RU[getRandomArrayElement(TYPES_OF_HOUSE)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 5),
      checkin: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      features: getRandomArrayUnique(FEATURES_OF_HOUSE),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayUnique(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

export {createObject};
