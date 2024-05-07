import FooterComponent from '../Components/FooterComponent.js';
import HeaderComponent from '../Components/HeaderComponent.js';
import HomeComponent from '../components/HomeComponent.js';

export default class HomeScreen extends HTMLElement{

    constructor() {
        super();

        this.render();
        
    }

    render() {
        const headerComponent = new HeaderComponent();
        const footerComponent = new FooterComponent();
        const homeComponent = new HomeComponent();
        
        this.appendChild(headerComponent);
        this.appendChild(homeComponent);
        this.appendChild(footerComponent);
    }
}

customElements.define('home-screen', HomeScreen);
