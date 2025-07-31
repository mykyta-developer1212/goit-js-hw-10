import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  createPromise(state, delay)
    .then(ms => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
        timeout: 4000,
      });
    })
    .catch(ms => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
        timeout: 4000,
      });
    });

  form.reset();
});

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}
