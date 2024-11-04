import iziToast from 'izitoast';
import * as pixabay from './js/pixabay-api.js';
import * as render from './js/render-functions.js';

const form = document.querySelector('form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function toggleLoader() {
  loader.classList.toggle('hidden');
}

form.addEventListener('submit', (e) => {
  const input = e.target.elements['search'];

  e.preventDefault();
  gallery.innerHTML = '';
  toggleLoader();

  if (input.value.trim().length === 0) {
    toggleLoader();
    iziToast.warning({
      position: 'topRight', message: 'Please enter a valid search!',
    });
    return;
  }

  pixabay.getData(input.value.trim())
    .then((data) => {
      if (!data.ok) {
        throw new Error(data.statusText);
      }
      return data.json();
    })
    .then(data => {
      if (data['hits'].length < 1) {
        iziToast.warning({
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      render.fillGalleryWithImages(data['hits']);
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight', message: 'Query failed!',
      });
      throw new Error(error.message);
    })
    .finally(() => {
        toggleLoader();
      }
    );

  form.reset();
});





