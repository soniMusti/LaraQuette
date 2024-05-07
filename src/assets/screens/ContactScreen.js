import ModelScreen from "../ModelScreen.js";
import ContactComponent from "../components/ContactComponent.js";

export default class ContactScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new ContactComponent);
    }
}

customElements.define('contact-screen', ContactScreen);