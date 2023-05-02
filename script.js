const btn = document.querySelector('#btn');
const mailInput = document.querySelector('#mail');
const mailSpan = document.querySelector('.mail-span');


btn.addEventListener('click', () => {
  if (mailInput.value.trim() === '' || !isValidEmail(mailInput.value)) {
    mailSpan.style.display = 'block';
    mailInput.style.borderColor = 'red';
  } else {
    mailSpan.style.display = 'none';
    mailInput.style.borderColor = '';
  }
});

mailInput.addEventListener('focus', () => {
  mailSpan.style.display = 'none';
  mailInput.style.borderColor = '';
});

function isValidEmail(email) {
  // This is a simple email validation function that matches most email patterns, but not all
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};