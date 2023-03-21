import Notiflix from 'notiflix';
// const axios = require('axios/dist/node/axios.cjs');
const axios = require('axios').default;
const API_KEY = '34491420-8cbbe56c75e64d038cb2665d9';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
const perPage = 40;
let page = 1;
let totalHits;
const btnMore = document.querySelector('.load-more');
function counterPhotos(photo) {
  totalHits = photo.totalHits;
  const hits = perPage * (page - 1);
  if (hits > totalHits) {
    btnMore.classList.add('hidden');
    return Notiflix.Notify.failure(
      'We are sorry, but you have reached the end of search results.'
    );
  }
}
async function fetchPhotos(name) {
  const SETTINGS = `&image_type=photo&per_page=${perPage}&page=${page}&orientation=horizontal&safesearch=true`;
  try {
    const response = await axios.get(`${BASE_URL}${name}${SETTINGS}`);
    const photo = await response.json();
    page += 1;
    return photo;
  } catch (error) {
    console.log(error);
  }
}

export default { fetchPhotos, counterPhotos };
