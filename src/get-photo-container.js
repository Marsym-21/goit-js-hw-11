function getPhotocontainer(photo) {
  console.log(photo.hits);
  const body = document.querySelector('body');
  const gallery = document.createElement('div');
  gallery.classList.add('photo_gallery');

  body.append(gallery);

  const galarryArray = photo.hits
    .map(
      element =>
        `<div class="photo-card">
      <img src="${element.webformatURL}" alt="${photo.tags}" loading="lazy" />
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
      </div>
    </div>`
    )
    .join('');

  console.log(galarryArray);

  gallery.insertAdjacentHTML('afterbegin', galarryArray);
  return body;
}
export default { getPhotocontainer };
