const API_KEY = '34491420-8cbbe56c75e64d038cb2665d9';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
const SETTINGS =
  '&image_type=photo&per_page=40&orientation=horizontal&safesearch=true';
function fetchPhotos(name) {
  return fetch(`${BASE_URL}${name}${SETTINGS}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default { fetchPhotos };
