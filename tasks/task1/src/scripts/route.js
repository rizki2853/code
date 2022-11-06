import Name from './pages/name';
import Nim from './pages/nim';
import Address from './pages/address';
import Hobby from './pages/hobby';
import Meme from './pages/meme';


const Routes = {
    null: Name,
    'nama': Name,
    'nim': Nim,
    'alamat': Address,
    'hobi': Hobby,
    'meme': Meme
};

export default Routes;