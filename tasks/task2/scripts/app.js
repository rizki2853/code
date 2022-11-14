import urlSplit from "./utils/url-split";
import Routes from "./resources/routes";

class App {
    constructor(content) {
        this._content = content;
    }

    async render() {
        const resource = urlSplit().resource;
        const menu = Routes[resource];
        this._content.innerHTML = await menu.tampil();
    }
}

const app = new App(document.querySelector('#content'));

window.addEventListener('load', () => app.render());
window.addEventListener('hashchange', () => app.render());