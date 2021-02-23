import {createObject} from './data.js';
import {createAd} from './similar-ads.js'

// Шаблон карточки объявления
const ADS_CONTAINER = document.querySelector('#map-canvas');
const TEMPLATE_AD = document.querySelector('#card').content.querySelector('.popup');

// Создание объявления
const similarAd = createObject();
const card = createAd(similarAd, TEMPLATE_AD);
ADS_CONTAINER.appendChild(card);

// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());
similarObjects;

