import Router from './Router.js';

export default class App {

    static #_instance = null;
    static get instance() {return new App();}

    #router = null;
    get router() {return this.#router;}

    name = "myApp";

    constructor() {
        if (App.#_instance != null && App.#_instance instanceof App) {
            return App.#_instance;
        }

        App.#_instance = this;
        this.#router = new Router();

    }

    render(screen) {
        document.getElementById('app').firstElementChild?.remove(); // supprime le contenu de l'élément #app
        document.getElementById('app').append(screen); // ajoute le contenu de l'élément screen à l'élément #app
    }
}