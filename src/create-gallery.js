const gallery = document.createElement('div');
function createGallery(element) {
  gallery.classList.add('gallery');
  element.after(gallery);
}

export default { createGallery, gallery };
