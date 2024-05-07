import ModelScreen from "./ModelScreen.js";
import NosCoachsComponent from "../components/NosCoachsComponent.js";

export default class NosCoachsScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new NosCoachsComponent)        
    }
}

customElements.define('noscoachs-screen', NosCoachsScreen);