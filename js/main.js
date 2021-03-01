import {createObject} from './data.js';
import {createMarkers} from './map.js';
import './form.js'


// Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());

// Создание обычных меток объявлений
createMarkers(similarObjects);
