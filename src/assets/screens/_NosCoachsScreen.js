import FooterComponent from "../Components/FooterComponent.js";
import HeaderComponent from "../Components/HeaderComponent.js";
import NosCoachsComponent from "../components/NosCoachsComponent.js";

export default class NosCoachsScreen extends HTMLElement{

    constructor() {
        super();

        this.render();
    }

    render() {
        const headerComponent = new HeaderComponent();
        const nosCoachsComponent = new NosCoachsComponent();
        const footerComponent = new FooterComponent;
        
        this.appendChild(headerComponent);
        this.appendChild(nosCoachsComponent);
        this.appendChild(footerComponent);
   
    }
}

customElements.define('noscoachs-screen', NosCoachsScreen);
