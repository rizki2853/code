import urlSplit from "../utils/url-split";

const Page = {
    async tampil() {
        const id = urlSplit().id;
        return `<h2>Ini adalah Menu ${id}</h2>`;
    }
}

export default Page;