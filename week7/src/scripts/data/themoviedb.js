import API_ENDPOINT from '../api-endpoint';

class TheMovieDb {
	static async nowPlayingMovies() {
		const response = await fetch(API_ENDPOINT.NOW_PLAYING);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async trendingWeekMovies() {
		const response = await fetch(API_ENDPOINT.TRENDING);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async upcomingMovies() {
		const response = await fetch(API_ENDPOINT.UPCOMING);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async detailMovie(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		return response.json();
	}
}

export default TheMovieDb;