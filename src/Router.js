import HomeScreen from "./screens/HomeScreen.js";
import NosCoachScreen from "./screens/NosCoachScreen.js";
import ReservationScreen from "./screens/ReservationScreen.js";
import RestaurationScreen from "./screens/RestaurationScreen.js";
import ContactScreen from "./screens/contactScreen.js";
import App from "./App.js";

export default class Router {

    #screen = null;
    get screen() {return this.#screen;}

    constructor(){
        window.onclick = this.handlePageClick;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }
    handlePageClick = (e) => {
        const link = e.target.closest('[target="spa"]');
        if( link){
            e.preventDefault();
            history.pushState(null, null, link.href);
            this.navigate();
        }
    }

    navigate = (e) => {
        if(location.pathname == '/' || location.pathname == '/src/index.html'){
            this.#screen = new HomeScreen();
        }
        else if (location.pathname =='/src/contact'){
            this.screen = new ContactScreen();
        }
        else if (location.pathname =='/Reservation'){
            this.screen = new ReservationScreen();
        }
        else if (location.pathname =='/Nos Coach'){
            this.screen = new NosCoachScreen();
        }
        else if (location.pathname =='/Restauration'){
            this.screen = new RestaurationScreen();
        }
    
        App.instance.render();
    }
    


}