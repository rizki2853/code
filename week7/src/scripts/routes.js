import NowPlaying from './pages/now-playing';
import Upcoming from './pages/upcoming';
import Detail from './pages/detail';
import Trending from "./pages/trending";

const routes = {
	"/": Trending, // default page
	"/now-playing": NowPlaying,
	"/trending": Trending,
	"/upcoming": Upcoming,
	"/detail/:id": Detail,
};

export default routes;
