import iziToast from 'izitoast';
import * as pixabay from './js/pixabay-api.js';
import * as render from './js/render-functions.js';
import {
  CSS_STYLES,
  EVENT_LISTENER_TYPE, FORM_ELEMENTS,
  PAGE_ELEMENTS, RESPONSE,
  SCROLL_BEHAVIOR,
  TOAST_MESSAGE,
  TOAST_METHODS,
  TOAST_POSITIONS,
} from './constants.js';

const form = document.querySelector(PAGE_ELEMENTS.FORM);
const loader = document.querySelector(PAGE_ELEMENTS.LOADER);
const gallery = document.querySelector(PAGE_ELEMENTS.GALLERY);
const btnMore = document.querySelector(PAGE_ELEMENTS.BTN_MORE);
let page = 1;
const per_page = 15;
let totalPages = null;
let prevQueryValue = null;
let totalHits = null;
let elementHeight = null;


function toggleLoader() {
  if (page > 1) {
    btnMore.classList.toggle(CSS_STYLES.HIDDEN);
  }
  loader.classList.toggle(CSS_STYLES.HIDDEN);
}

function showToast({
                     position = TOAST_POSITIONS.TOP_RIGHT, method = TOAST_METHODS.INFO, message,
                   }) {
  iziToast[method]({
    position: position, message: message,
  });
}

function scrollWindow(height) {
  window.scrollBy(
    {
      top: height * 2,
      left: 0,
      behavior: SCROLL_BEHAVIOR
    },
  );
}


form.addEventListener(EVENT_LISTENER_TYPE.SUBMIT, (e) => {
  const input = e.target.elements[FORM_ELEMENTS.SEARCH];
  prevQueryValue = input.value.trim();

  e.preventDefault();
  gallery.innerHTML = '';
  toggleLoader();
  page = 1;

  if (input.value.trim().length === 0) {
    toggleLoader();
    showToast({
      message: TOAST_MESSAGE.VALID_SEARCH_QUERY, method: TOAST_METHODS.WARNING,
    });
    return false;
  }

  pixabay.getData(input.value.trim(), page, per_page)
    .then(data => {
      console.log(data);
      if (data[RESPONSE.HITS].length < 1) {
        showToast({
          method: TOAST_METHODS.WARNING, message: TOAST_MESSAGE.NO_IMAGES_MATCHING_SEARCH_QUERY,
        });
      }
      totalHits = data[RESPONSE.TOTAL_HITS];
      render.fillGalleryWithImages(data[RESPONSE.HITS]);
      page++;
    })
    .catch(error => {
      showToast({
        method: TOAST_METHODS.ERROR, message: TOAST_MESSAGE.QUERY_FAILED,
      });
      throw new Error(error.message);
    })
    .finally(() => {
      elementHeight = document.querySelector(PAGE_ELEMENTS.GALLERY_ITEM).getBoundingClientRect().height;
      toggleLoader();
    });

  form.reset();
});


btnMore.addEventListener(EVENT_LISTENER_TYPE.CLICK, (e) => {
  e.preventDefault();
  totalPages = Math.ceil(totalHits / per_page);
  toggleLoader();

  pixabay.getData(prevQueryValue, page, per_page)
    .then(data => {
      render.fillGalleryWithImages(data[RESPONSE.HITS]);
      page++;
      if (page > totalPages) {
        showToast({
          message: TOAST_MESSAGE.REACHED_END_OF_SEARCH_RESULTS,
        });
        btnMore.classList.add(CSS_STYLES.HIDDEN);
      }
      scrollWindow(elementHeight);
    })
    .catch(error => {
      showToast({
        method: TOAST_METHODS.ERROR, message: TOAST_MESSAGE.QUERY_FAILED,
      });
      throw new Error(error.message);
    })
    .finally(() => {
      toggleLoader();
    });

});



