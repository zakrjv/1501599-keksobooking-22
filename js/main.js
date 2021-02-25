import {createObject} from './data.js';
import {createAd} from './similar-ads.js'
import './form.js'

// Шаблон карточки объявления
const adsContainer = document.querySelector('#map-canvas');
const templateAd = document.querySelector('#card').content.querySelector('.popup');

// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());

// Создание объявления
const card = createAd(similarObjects[0], templateAd);
adsContainer.appendChild(card);

