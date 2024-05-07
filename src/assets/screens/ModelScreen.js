import FooterComponent from './FooterComponent.js';
import HeaderComponent from './HeaderComponent.js';

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