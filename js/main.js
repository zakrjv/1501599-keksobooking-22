'use strict';

const getRandom = function (min, max) {
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

function getRandomInteger (min, max) {
  const randomNumber = getRandom(min, max);

  return Math.floor(randomNumber);
}

getRandomInteger(3, 10);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloat (min, max, simbolsAfterComma) {
  const randomNumber = getRandom(min, max);

  return randomNumber.toFixed(simbolsAfterComma);
}

getRandomFloat(5.78, 10.495, 2);
