import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { QUERY_PARAMS } from '../constants.js';

let params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  min_width: '360',
  max_height: '200',
  per_page: '200',
};

function createURL(value, page = 1, per_page = 15) {
  params.page = String(page);
  params.per_page = String(per_page);

  let searchParams = new URLSearchParams(params);
  return `${QUERY_PARAMS.URL}?key=${QUERY_PARAMS.API_KEY}&q=${value}&${searchParams}`;
}

export async function getData(value, page, per_page) {
  let response = await axios.get(createURL(value, page, per_page));
  return response.data;
}
