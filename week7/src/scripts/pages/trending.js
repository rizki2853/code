import TheMovieDb from "../data/themoviedb";
import {createMovieItemTemplate} from "../template-creator";

const Trending = {
    async render() {
        return `
          <div class="content">
            <h2 class="content__heading">Trending Week Movie</h2>
            <div id="movies" class="movies">
     
            </div>
          </div>
        `;
    },

    async afterRender() {
        const movies = await TheMovieDb.trendingWeekMovies();
        const moviesContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default Trending;
