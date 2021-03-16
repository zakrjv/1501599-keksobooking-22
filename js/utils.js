const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const debounce = (cb, timeout) => {
  let wait;
  return () => {
    const context = this;

    const later = function () {
      wait = null;
      cb.apply(context)
    }

    clearTimeout(wait);

    wait = setTimeout(later, timeout);
  };
};


export {
  isEscEvent,
  debounce
}


