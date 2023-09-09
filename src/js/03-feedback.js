import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form');
formReg.addEventListener('input', handleInput);

function handleInput(event) {
  event.preventDefault();
  const feedbackFormState = { email: '', message: '' };
  const form = event.target.nodeName;
  if (form === 'INPUT') {
    const email = event.target.value;
    console.log(email);
    feedbackFormState.email = email;

    console.log(feedbackFormState);
  } else if (form === 'TEXTAREA') {
    const message = event.target.value;
    console.log(message);
    feedbackFormState.message = message;
    console.log(feedbackFormState);
  }
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
