import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

formReg.addEventListener('input', throttle(handleInput, 500));
formReg.addEventListener('submit', handleSubmit);

const data = JSON.parse(localStorage.getItem('feedback-form-state'));
let feedbackFormState = data || {};

fillForm();

function handleInput(event) {
  feedbackFormState[event.target.name] = event.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function fillForm() {
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
function handleSubmit(event) {
  event.preventDefault();
  console.log(feedbackFormState);
  localStorage.removeItem('feedback-form-state');
  feedbackFormState = {};
}
