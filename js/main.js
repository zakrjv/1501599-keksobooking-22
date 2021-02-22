import {createObject} from './data.js';
import './similar-ads.js'


//  Создание массива из 10 объектов
const similarObjects = new Array(10).fill(null).map(() => createObject());
similarObjects;
