const formAd = document.querySelector('.ad-form');
const formAdBlocks = formAd.children;
const mapFilters = document.querySelector('.map__filters')
const mapFiltersBlocks = mapFilters.children;


const disableElements = (elements) => {
  for (let element of elements) {
    element.disabled = true;
  }
};

const enableElements = (elements) => {
  for (let element of elements) {
    element.disabled = false;
  }
};

const disablePage = () => {
  formAd.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled')
  disableElements(formAdBlocks);
  disableElements(mapFiltersBlocks);
};

disablePage();

const enablePage = () => {
  formAd.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled')
  enableElements(formAdBlocks);
  enableElements(mapFiltersBlocks);
};


export {enablePage};
