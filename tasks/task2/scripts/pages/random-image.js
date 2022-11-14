import APIs from "../resources/apis";

const RandomImage = {
    async tampil() {
        return `
            <h2>Random Image</h2>
            <img src="${APIs.randomImage}" />
        `;
    }
}

export default RandomImage;