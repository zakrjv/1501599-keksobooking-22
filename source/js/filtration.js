const Default = {
  DEFAULT_VALUE: 'any',
  PRICE_LOW: 10000,
  PRICE_HIGH: 50000,
};

const filtresMap = document.querySelector('.map__filters');
const housingTypeInput = document.querySelector('[name="housing-type"]');
const priceInput = document.querySelector('[name="housing-price"]');
const roomsInput = document.querySelector('[name="housing-rooms"]');
const guestsInput = document.querySelector('[name="housing-guests"]');
const featuresList = document.querySelector('#housing-features');

const filtrationAds = (ad) => {
  if (
    (ad.offer.type === housingTypeInput.value || housingTypeInput.value === Default.DEFAULT_VALUE)
    && (ad.offer.rooms === +roomsInput.value || roomsInput.value === Default.DEFAULT_VALUE)
    && (ad.offer.guests === +guestsInput.value || guestsInput.value === Default.DEFAULT_VALUE)
    && (filtrationPrice(ad) || priceInput.value === Default.DEFAULT_VALUE)
    && filtrationFeatures(ad)
  ) {
    return ad;
  }
  return false;
};


const filtrationPrice = (element) => {
  switch (priceInput.value) {
    case 'low':
      return element.offer.price < Default.PRICE_LOW;
    case 'middle':
      return element.offer.price <= Default.PRICE_HIGH && element.offer.price >= Default.PRICE_LOW;
    case 'high':
      return element.offer.price > Default.PRICE_HIGH;
  }

  // low -- ad.offer.price < Default.LOW
  // middle -- Default.LOW <= ad.offer.price <= Default.HIGH
  // high -- ad.offer.price > Default.HIGH
}

const filtrationFeatures = (element) => {
  const selectedFeatures = featuresList.querySelectorAll('input:checked');
  const arrayFeaturesList = Array.from(selectedFeatures).map((item) => item.value);

  return arrayFeaturesList.every((item) => element.offer.features.includes(item));
}

const resetFilter = () => {
  filtresMap.reset();
}

export {filtrationAds, resetFilter}
