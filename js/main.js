'use strict';

const TYPE_OF_HOUSE = ['palace', 'flat', 'house', 'bungalow'];
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


// Функция, возвращающая случайное число

const getRandom = (min, max) => {
  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
  }

  if (max === min) {
    return max;
  }

  return min + Math.random() * (max + 1 - min);
}

// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInteger = (min, max) => {
  const randomNumber = getRandom(min, max);

  return Math.floor(randomNumber);
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = (min, max, simbolsAfterComma) => {
  const randomNumber = getRandom(min, max);

  return randomNumber.toFixed(simbolsAfterComma);
}

getRandomFloat(5.78, 10.495, 2);


// Случайный элемент массива

const getRandomArrayElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
}


// Массив случайной длины из значений, которые не должны повторяться
const getRandomArrayUnique = (array) => {
  // длина нового массива
  const arrayLength = getRandomInteger(0, array.length);
  // новый массив со случайным элементом
  const newUniqueArray = [getRandomArrayElement(array)];

  for (let i = 0; i < arrayLength; i++) {
    // получаем рандомный элемент из массива
    const randomElement = array[getRandomInteger(0, array.length - 1)]

    if (!newUniqueArray.includes(randomElement)) {
      // заполнить элемент newUniqueArray массива с индексом i
      newUniqueArray[i] = randomElement;
    } else {
      i--;
    }
  }

  return newUniqueArray;
}


//Функция, которая создаёт объект

const createObject = () => {
  const locationX = getRandomFloat(X.min, X.max, 5);
  const locationY = getRandomFloat(Y.min, Y.max, 5);
  return {
    author: {
      avatar: AVATAR_IMG.url + '0' + getRandomInteger(1, 8).toString() + AVATAR_IMG.formatImg,
    },
    offer: {
      title: 'Заголовок предложения',
      address: locationX.toString() + ', ' + locationY.toString(),
      price: getRandomInteger(1, 1e4),
      type: getRandomArrayElement(TYPE_OF_HOUSE),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 5),
      checkin: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      features: getRandomArrayUnique(FEATURES_OF_HOUSE),
      description: 'Описание помещения',
      photos: getRandomArrayUnique(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};


//  Создание массива

const similarObject = new Array(10).fill(null).map(() => createObject());

similarObject;
