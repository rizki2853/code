import APIs from "../resources/apis";
import fetchAPI from "../utils/fetch-api";

const RandomUser = {
    async tampil() {
        const randomUser = await fetchAPI(APIs.randomUser);
        const user = randomUser.results[0];
        return `
            <h2>Random User</h2>
            <p><strong>Name :</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p><strong>Gender :</strong> ${user.gender}</p>
            <p><strong>Email :</strong> ${user.email}</p>
            <p><strong>Phone :</strong> ${user.phone}</p>
        `;
    }
}

export default RandomUser;