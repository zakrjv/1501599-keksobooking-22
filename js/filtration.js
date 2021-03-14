const Default = {
  housingType: 'any',
};

const getAdRank = (ad) => {
  const housingTypeInput = document.querySelector('[name="housing-type"]');

  let rank = 0;

  if (ad.offer.type === (housingTypeInput.value || Default.housingType)) {
    rank += 1;
  }

  return rank;
};

const sortAds = (adA, adB) => {
  const rankA = getAdRank(adA);
  const rankB = getAdRank(adB);

  return rankB - rankA;
}

export {sortAds}
