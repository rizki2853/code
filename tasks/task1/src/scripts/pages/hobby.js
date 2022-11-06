import Helpers from '../helpers';

const Hobby = {
    async render() {
        const id = Helpers.urlSplit().id;
        return (id == 1) ? `<h2>Playing Game</h2>` : (id == 2) ? `<h2>Drawing</h2>` : (id == 3) ? `<h2>3D Modeling</h2>` : `<h2>I Just Have 3 Hobbies</h2>`
    }
}

export default Hobby;