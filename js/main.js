import {createObject} from './data.js';
import {createAd} from './similar-ads.js'

// Шаблон карточки объявления
const ADS_CONTAINER = document.querySelector('#map-canvas');
const TEMPLATE_AD = document.querySelector('#card').content.querySelector('.popup');

// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());

// Создание объявления
const card = createAd(similarObjects[0], TEMPLATE_AD);
ADS_CONTAINER.appendChild(card);

