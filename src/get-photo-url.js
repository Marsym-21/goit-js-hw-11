const API_KEY = '34491420-8cbbe56c75e64d038cb2665d9';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
let page = 1;
function fetchPhotos(name) {
  const SETTINGS = `&image_type=photo&per_page=40&page=${page}&orientation=horizontal&safesearch=true`;
  return fetch(`${BASE_URL}${name}${SETTINGS}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    page += 1;
    return response.json();
  });
}

export default { fetchPhotos, page };
