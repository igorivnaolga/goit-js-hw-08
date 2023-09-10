import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
formReg.addEventListener('input', throttle(handleInput, 500));
const feedbackFormState = {};

function handleInput(event) {
  feedbackFormState[event.target.name] = event.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );

  const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (data) {
    email.value = data.email;
    message.value = data.message;
    console.log(email.value);
    console.log(message.value);
  } else {
    return;
  }
}
formReg.addEventListener('submit', throttle(handleSubmit, 500));
function handleSubmit() {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
