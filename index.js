class Movie {
  constructor() {
    this.apiUrl =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06dcefc4c6268cb53b82f76560368636";
  }

  getMovies() {
    fetch(this.apiUrl, { method: "GET" })
      .then(value => value.json())
      .then(response => {
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
      });
  }
}
let movieObj = new Movie();
movieObj.getMovies();

let a= 'hari';
console.log([...a, 123])
