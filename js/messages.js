import {isEscEvent} from './utils.js';

const ALERT_SHOW_TIME = 5000;

const mainLocation = document.querySelector('main');

// Сообщение при ошибке получения данных
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '26px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


// Если при отправке данных произошла ошибка запроса
const showFailedDispatch = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);
  mainLocation.appendChild(errorMessage);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      errorMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    errorMessage.remove();
  });

  const closeErrorButton = errorMessage.querySelector('.error__message');
  closeErrorButton.addEventListener('click', () => {
    errorMessage.remove();
  })
};


// Сообщение при удачной отправке данных
const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content;
  const successMessage = successTemplate.querySelector('.success').cloneNode(true);
  mainLocation.appendChild(successMessage);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      successMessage.remove();
    }
  })

  document.addEventListener('click', () => {
    successMessage.remove();
  })
};

export {
  showAlert,
  showFailedDispatch,
  showSuccessMessage
}
