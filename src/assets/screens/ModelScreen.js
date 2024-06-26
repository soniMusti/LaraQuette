
import FooterComponent from '../Components/FooterComponent.js';
import HeaderComponent from '../Components/HeaderComponent.js';

export default class ModelScreen extends HTMLElement{

    constructor() {
        super();
        
    }

    render(screen) {
        const headerComponent = new HeaderComponent();
        const footerComponent = new FooterComponent();
        
        this.appendChild(headerComponent);
        this.appendChild(screen);
        this.appendChild(footerComponent);
    }
}

customElements.define('model-screen', ModelScreen);