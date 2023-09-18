import throttle from 'lodash.throttle';

const formData = {};
const FORM_LOCAL_SROREGE_KEY = 'feedback-form-state';

// Ініціалізація форми
const formEl = document.querySelector('form');

// Відстежування події input і submit з використанням throttle із затримкою 500ms
formEl.addEventListener('input', throttle(formDataInput, 500));
formEl.addEventListener('submit', formClearAfterSubmit);

// Функція для запису даних в localStorage з formData
// function formDataInput(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(FORM_LOCAL_SROREGE_KEY, JSON.stringify(formData));
// };

function formDataInput(event) {
  const FORM_LOCAL_STORAGE_KEY = "feedback-form-state";
  let formData = JSON.parse(localStorage.getItem(FORM_LOCAL_STORAGE_KEY)) || {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

// Перевірка стану сховища, і якщо там є збережені дані, заповнюються ними поля форми. В іншому випадку поля - порожні.
formFillCheck();

function formFillCheck() {
    const dataInForm = localStorage.getItem(FORM_LOCAL_SROREGE_KEY);
    if (dataInForm) {
        const parceDataInForm = JSON.parse(dataInForm);
        for (const property in parceDataInForm) {
            if (parceDataInForm.hasOwnProperty(property)) {
                formEl.elements[property].value = parceDataInForm[property];
                formData[property] = parceDataInForm[property];
            }
        }
    }
};

// Функція для очищення localStorage від введених даних після натискання Submit
function formClearAfterSubmit(event) {
    event.preventDefault();
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;
    formEl.reset();
    localStorage.removeItem("FORM_LOCAL_SROREGE_KEY");
};