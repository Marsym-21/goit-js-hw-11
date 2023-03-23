import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

function getPhotocontainer(photo) {
  const body = document.querySelector('body');
  const gallery = document.querySelector('.gallery');
  const galleryArray = photo.hits
    .map(
      element =>
        `<a class="gallery_item" href = "${element.largeImageURL}" ><img class="gallery__image" src="${element.webformatURL}" alt="${photo.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes:${element.likes}</b>
        </p>
        <p class="info-item">
          <b>Views:${element.views}</b>
        </p>
        <p class="info-item">
          <b>Comments:${element.comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads:${element.downloads}</b>
        </p>
      </div></a>`
    )
    .join('');

  if (galleryArray.split('').length === 0) {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    gallery.insertAdjacentHTML('beforeend', galleryArray);

    const lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
    });
    return body;
  }
}

export default { getPhotocontainer };
