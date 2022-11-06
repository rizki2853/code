import Helpers from './helpers';
import Routes from './route';

class App {
    constructor(content) {
        this._content = content;
    }

    async render() {
        const resource = Helpers.urlSplit().resource;
        const menu = Routes[resource];
        this._content.innerHTML = await menu.render();
    }
}

export default App;

