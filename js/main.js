import {createObject} from './data.js';


//  Создание массива из 10 объектов
const similarObject = new Array(10).fill(null).map(() => createObject());
similarObject;
