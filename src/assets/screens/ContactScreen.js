import FooterComponent from "../Components/FooterComponent.js";
import HeaderComponent from "../Components/HeaderComponent.js";
import ContactComponent from "../components/ContactComponent.js";

export default class ContactScreen extends HTMLElement{

    constructor() {
        super();

        this.render();
    }

    render() {
        const headerComponent = new HeaderComponent();
        const contactComponent = new ContactComponent();
        const footerComponent = new FooterComponent();

        this.appendChild(headerComponent);
        this.appendChild(contactComponent);
        this.appendChild(footerComponent);
    }
}

customElements.define('contact-screen', ContactScreen);
