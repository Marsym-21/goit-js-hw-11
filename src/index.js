import API1 from './get-photo-url';
import API2 from './get-photo-container';
import API3 from './create-gallery';
import Notiflix from 'notiflix';

const btnMore = document.querySelector('.load-more');
btnMore.classList.add('hidden');

const form = document.querySelector('.search-form');
API3.createGallery(form);
form.addEventListener('input', getValue);
form.addEventListener('submit', getPhoto);
btnMore.addEventListener('click', morePhoto);

const formData = {};
function getValue(event) {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
}

function getPhoto(event) {
  event.preventDefault();
  API3.gallery.innerHTML = '';
  API1.page = 1;
  btnMore.classList.remove('hidden');
  API1.fetchPhotos(formData.searchQuery)
    .then(photo => {
      API2.getPhotocontainer(photo);
      API1.counterPhotos(photo);
      return Notiflix.Notify.success(
        `Hooray! We found ${photo.totalHits} images.`
      );
    })
    .catch(error => {
      console.log(error);
    });
}

function morePhoto() {
  API1.fetchPhotos(formData.searchQuery)
    .then(photo => {
      API2.getPhotocontainer(photo);
      API1.counterPhotos(photo);
    })
    .catch(error => {
      console.log(error);
    });
}
