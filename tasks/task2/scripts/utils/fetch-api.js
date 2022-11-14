const fetchAPI = async endpoint => {
    const response = await fetch(endpoint);
    return response.json();
}

export default fetchAPI;