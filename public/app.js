const targetEl = document.querySelector('.flexbox');
let pageNumber = 1;

const getMovies = async (page = 1) => {
  const response = await fetch(`/api/movies/best/${page}`);
  const movies = await response.json();
  return movies;
};

const renderMovies = async () => {
  const movies = await getMovies(pageNumber);

  // empty out the target element
  targetEl.innerHTML = '';

  document.getElementById('movies').innerHTML = '';
  movies.forEach((movie) => {
    console.log(movie._id);
    const movieEl = document.createElement('movie');

    movieEl.innerHTML = `
    <div class="movie-container">
      <div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-image">
              <img crossorigin="anonymous" src="${movie.poster || ''}">
            </div>
            <div class="card-content white-text">
              <span class="card-title">${movie.title} (${movie.year})</span>
              <p>${movie.fullplot}</p>
            </div>
            <div class="card-action">
              <a href="${movie.url}">Read more!</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    targetEl.appendChild(movieEl);
  });
};

// Event listeners for previous and next buttons
document.getElementById('prev').addEventListener('click', () => {
  pageNumber -= 1;
  renderMovies();

  if (pageNumber === 1) {
    document.getElementById('prev').classList.add('disabled');
  }

  // scroll to top of page
  window.scrollTo(0, 0);
});

// Event listeners for buttons
document.getElementById('next').addEventListener('click', () => {
  pageNumber += 1;
  renderMovies();

  if (pageNumber >= 2) {
    document.getElementById('prev').classList.remove('disabled');
  }

  // scroll to top of page
  window.scrollTo(0, 0);
});

// Invoke the renderMovies function when the page loads
renderMovies();
