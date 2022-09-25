import Drawer from "./drawer";

class App{
    constructor({button,drawer,content}) {
        this._buttom  =button;
        this._drawer =drawer;
        this._content =content;


        this._initialAppShell()
    }


    _initialAppShell(){
        Drawer.init({
            button :this._buttom,
            drawer : this._drawer,
            content : this._content,


        })
    }
}


export default App;