import App from './App.js';
import HomeScreen from '../screens/HomeScreen.js';
import ContactScreen from '../screens/ContactScreen.js';
import NosCoachsScreen from '../screens/NosCoachsScreen.js';
import ReservationsScreen from '../screens/ReservationsScreen.js';
import RestaurationScreen from '../screens/RestaurationScreen.js';
import NotFoundScreen from '../screens/NotFoundScreen.js';



export default class Router {

    #screen = null;
    get screen() {return this.#screen;}

    constructor(){

        window.onclick = this.pageClick; // capture un click sur la fenêtre(window)
        window.onload = this.navigate; // capture le chargement de la fenêtre(window)
        window.onpopstate = this.navigate; // capture l'historique de la fenêtre(window)
    }


    pageClick = (e) => {
        const link = e.target.closest('[target="spa"]'); // capture le lien cliqué puis vérifie qu'il contient le sélecteur (ici : target="spa") qu'on a rajouté sur nos lien dans le fichier html
        if (link) {
            e.preventDefault(); // annule le comportement par défaut du lien (chargement de la page dans une nouvelle fenêtre)
            history.pushState(null, null, link.href); // ajoute à l'historique le href de link
            this.navigate(); // navigue vers la nouvelle page
        }
    }

    navigate = (e) => {
        // this.#screen = document.createElement('div'); // crée un nouvel élément div dans this.#screen
        // this.#screen.textContent = location.pathname; // récupère le chemin (url) de la page actuelle (à remplacer par le code à insérer)
        if (location.pathname == "/" || location.pathname == "/index") {
            // this.#screen = new HomeScreen();
            this.#screen = new HomeScreen();
        }
        else if (location.pathname == "/contact") {
            this.#screen = new ContactScreen();
        }
        else if (location.pathname == "/nosCoachs") {
            this.#screen = new NosCoachsScreen();
        }
        else if (location.pathname == "/reservations") {
            this.#screen = new ReservationsScreen();
        }
        else if (location.pathname == "/restauration") {
            this.#screen = new RestaurationScreen();
        }
        else {
            this.#screen = new NotFoundScreen();
        }
        
        App.instance.render(this.#screen); // appelle la méthode render() de l'instance de App
    }
}