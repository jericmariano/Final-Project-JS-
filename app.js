/*
add loading state
add error if can't find a movie any search results
don't repeat code
check out local storage
add to Search results: ""
add sorting filter
underline animation
website clean up
*/

const movieListEl = document.querySelector('.movie__list')
const searchResultsEl = document.querySelector('.search__results')

async function onSearchChange(event) {
    const search = event.target.value;
    searchResultsEl.innerHTML += " " + event.target.value;
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${search}`)
    const moviesData = await movies.json()

    movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")
}

async function renderMovies() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=hello`) 
    const moviesData = await movies.json()

    movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("")

}

function moviesHTML(movie) {
    return `
    <div class="movie__card">
        <div class="movie__card--container">
        <img src="${movie.Poster}" class="movie__poster" alt="This image is unavailable.">
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