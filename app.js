const movieListEl = document.querySelector('.movie__list')

async function onSearchChange(event) {
    const search = event.target.value;
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${search}`)
    const moviesData = await movies.json()

    movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
    // find out how to add to search results
}

async function renderMovies() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=hello`) // fix starting page without search, also don't repeat code^^, check out localStorage, FPP
    const moviesData = await movies.json()

    movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
}

function moviesHTML(movie) {
    return `
    <div class="movie__card">
        <div class="movie__card--container">
        <img src="${movie.Poster}" class="movie__poster" alt="">
        <div class="movie__description">
          <h3 class="movie__title">${movie.Title}</h3>
          <p class="movie__year"><b>Year: </b>${movie.Year}</p>
          <p class="movie__ID"><b>imdbID: </b>${movie.imdbID}</p>
          <p class="movie__type"><b>Type: </b>${movie.Type}</p>
        </div>
        </div>
      </div>`
} 

renderMovies();