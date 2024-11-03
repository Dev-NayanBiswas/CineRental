function imageURL(img) {
  return new URL(`../../src/assets/movie-covers/${img}`, import.meta.url).href
}

export default imageURL