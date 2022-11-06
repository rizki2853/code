import App from './scripts/app';

const app = new App(document.querySelector('#content'))

window.addEventListener('load', () => app.render());

window.addEventListener('hashchange', () => app.render());