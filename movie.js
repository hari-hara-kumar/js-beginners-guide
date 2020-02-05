class Movie {
  constructor() {
    this.apiUrl =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";
  }

  async getMovies() {
    const movieSycn = await fetch(this.apiUrl, { method: "GET" });
    const response = await movieSycn.json();
    let { results } = response;
    let renderArea = document.getElementById("app");
    let movieResult = results.map(value => {
      return `<h1>${value.title}</h1>
        <p>${value.release_date}</p>`;
    });
    movieResult.forEach((data, idx, arr) => {
      // console.log("data", data);
      // console.log("idx", idx);
      renderArea.innerHTML += data;
    });
  }
}

export default Movie;
