async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=fast")
    const moviesData = await movies.json()
    const movieListEl = document.querySelector('.movie__list')


    movieListEl.innerHTML = moviesData.Search.map((movie) => `
    <div class="movie__card">
        <div class="movie__card--container">
        <img src="${movie.Poster}" class="movie__poster" alt="">
        <div class="movie__description">
          <h3 class="movie__title">${movie.Title}</h3>
          <p class="movie__year"><b>Year: </b>${movie.Year}</p>
          <p class="movie__ID"><b>imdbID: </b>tt1905041</p>
          <p class="movie__type"><b>Type: </b>movie</p>
        </div>
        </div>
      </div>`).join("")
    console.log(moviesData.Search)
}

main();