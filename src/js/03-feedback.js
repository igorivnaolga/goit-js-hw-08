import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const email = document.querySelector('email');
// const message = document.querySelector('message');

form.addEventListener('input', handleInput);

function handleInput(event) {
  const value = event.target.value;
  const name = event.target.name;
  const feedbackFormState = { email: '', message: '' };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );

  if (name === email) {
    console.log(value);
    feedbackFormState.email = value;
  } else if (name === message) {
    console.log(value);
    feedbackFormState.message = value;
  }
  return;
}
