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

export {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArrayUnique
};
