import 'izitoast/dist/css/iziToast.min.css';


const API_KEY = '46865646-27ce533d0a2b530f03419db89';
const URL = 'https://pixabay.com/api/';

export function log() {
  console.log(`pixabay.js connected`);
}

let params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  min_width: '360',
  max_height: '200',
};

function createURL(value) {
  let searchParams = new URLSearchParams(params);
  return `${URL}?key=${API_KEY}&q=${value}&${searchParams}`;
}

export function getData(value) {
  return fetch(createURL(value), {});
}