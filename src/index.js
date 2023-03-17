import API1 from './get-photo-url';
import API2 from './get-photo-container';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
form.addEventListener('input', getValue);
form.addEventListener('submit', getPhoto);

const formData = {};
function getValue(event) {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
}

function getPhoto(event) {
  event.preventDefault();
  API1.fetchPhotos(formData.searchQuery)
    .then(photo => {
      API2.getPhotocontainer(photo);
    })
    .catch(error => {
      console.log(error);
      //   return Notiflix.Notify.failure(
      //     'Oops, there is no country with that name'
      //   );
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
