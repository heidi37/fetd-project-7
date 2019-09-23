const alertX = document.querySelector('#alert .fa-times');
const alertMessage = document.getElementById('alert');

const messageSubmitted = document.getElementById('message-submitted');
const errorMessage = document.getElementById('message-error');

const sendButton = document.getElementById('send');
const form = document.getElementById('message-form');

const userNameInput = form.querySelector('input')
const userMessageInput = form.querySelector('textarea')

const errorX = document.querySelector('#message-error .fa-times');
const messageSubmittedX = document.querySelector('#message-submitted .fa-times');



alertX.addEventListener('click', () => {
    alertMessage.style.display = 'none';
});

errorX.addEventListener('click', () => {
    errorMessage.style.display = 'none';
});

messageSubmittedX .addEventListener('click', () => {
    messageSubmitted.style.display = 'none';
});



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userNameInput.value);
    console.log(userMessageInput.value);
    if (!userNameInput.value || !userMessageInput.value) {
        errorMessage.style.display = 'block';
    } else {
    messageSubmitted.style.display = 'block';
    }
});


