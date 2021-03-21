const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const DEFAULT_SRC = 'img/muffin-grey.svg';
const PHOTO_PARAMETERS = {
  alt: 'Фотография жилья',
  width: 70,
  height: 70,
}

const checkType = (type) => {
  return FILE_TYPES.some((it) => {
    return type.endsWith(it);
  })
};

const uploadPhoto = (input, preview) => {

  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  if (checkType(fileName)) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const createPhoto = (container) => {
  const newPhoto = document.createElement('img')
  newPhoto.alt = PHOTO_PARAMETERS.alt;
  newPhoto.width = PHOTO_PARAMETERS.width;
  newPhoto.height = PHOTO_PARAMETERS.height;
  return container.appendChild(newPhoto);
}

const resetPhoto = (preview) => {
  preview.src = DEFAULT_SRC;
  preview.innerHTML = '';
};


export {
  uploadPhoto,
  resetPhoto,
  createPhoto
}
