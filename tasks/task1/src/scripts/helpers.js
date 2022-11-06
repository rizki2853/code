const Helpers = {
    urlSplit() {
        const url = window.location.hash
            .slice(2)
            .toLowerCase()
            .split('/');
        return {
            resource: url[0] || null,
            id: url[1] || null,
        }
    },

    async fetchAPI(endpoint) {
        const response = await fetch(endpoint);
        return response.json();
    }
}

export default Helpers;