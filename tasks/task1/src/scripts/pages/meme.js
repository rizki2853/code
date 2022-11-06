import Helpers from "../helpers";
import APIs from "../api";

const Meme = {
    async render() {
        const randomMeme = await Helpers.fetchAPI(APIs.randomUser);
        return `
            <h2>Random Meme</h2>
            <img src="${randomMeme.preview[2]}">
        `;
    }
}

export default Meme;