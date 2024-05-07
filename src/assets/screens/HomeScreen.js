import HomeComponent from '../components/HomeComponent.js';
import ModelScreen from './ModelScreen.js';

export default class HomeScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new HomeComponent);        
    } 
}

customElements.define('home-screen', HomeScreen);
