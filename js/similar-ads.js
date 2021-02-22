import {createObject} from './data.js';

const ADS_CONTAINER = document.querySelector('#map-canvas');
const TEMPLATE_AD = document.querySelector('#card').content.querySelector('.popup');

const similarAd = createObject();

const createFeatures = (features) => {
  const featuresList = document.createDocumentFragment();
  features.forEach((featureName) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add('popup__feature--' + featureName);
    featuresList.appendChild(featureItem);
  });
  return featuresList;
};

const createPhoto = (photos) => {
  const photosList = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.src = photo;
    photoItem.alt = 'Фотография жилья';
    photoItem.width = 45;
    photoItem.height = 40;
    photosList.appendChild(photoItem);
  })
  return photosList;
};


const createAd = ({
  author: {avatar},
  offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos},
}) => {
  const adElement = TEMPLATE_AD.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = title;
  adElement.querySelector('.popup__text--address').textContent = address;
  adElement.querySelector('.popup__text--price').textContent = price + ' ₽/ночь';
  adElement.querySelector('.popup__type').textContent = type;
  adElement.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты для ' + guests + ' гостей';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ', выезд до ' + checkout;
  adElement.querySelector('.popup__features').innerHTML = '';
  adElement.querySelector('.popup__features').appendChild(createFeatures(features));
  adElement.querySelector('.popup__description').textContent = description;
  adElement.querySelector('.popup__photos').innerHTML = '';
  adElement.querySelector('.popup__photos').appendChild(createPhoto(photos));
  adElement.querySelector('.popup__avatar').src = avatar;

  return adElement;
};

const card = createAd(similarAd);

ADS_CONTAINER.appendChild(card);
