'use strict';

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomInteger (min, max) {
  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
  }

  if (max === min) {
    return max;
  }

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

getRandomInteger(3, 5);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloat (min, max, simbolsAfterComma) {
  if (max < min) {
    const temp = max;
    max = min;
    min = temp;
  }

  if (max === min) {
    return max;
  }

  let rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(simbolsAfterComma);
}

getRandomFloat(5.78, 10.495, 2);
