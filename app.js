async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=fast")
    const moviesData = await movies.json()
    const movieListEl = document.querySelector('.movie__list')


    movieListEl.innerHTML = moviesData.Search.map((movie) => `
    <div class="movie__card">
        <div class="movie__card--container">
          <h3>Movie Title</h3>
          <p><b>Year: </b>2000</p>
          <p><b>imdbID: </b>tt1905041</p>
          <p><b>Type: </b>movie</p>
          <p><b>Poster: </b>image</p>
        </div>
      </div>`).join("")
    console.log(moviesData)
}

main();