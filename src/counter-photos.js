function counterPhotos(photo) {
  console.log(photo.hits.length);
  hits = photo.hits.length;
  console.log(hits);
  hits += hits;
  console.log(hits);
  console.log(photo.totalHits);
}

export default { counterPhotos };
