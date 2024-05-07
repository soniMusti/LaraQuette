import ModelScreen from "./ModelScreen.js";
import RestaurationComponent from "../components/RestaurationComponent.js";

export default class RestaurationScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new RestaurationComponent);
    }
}

customElements.define('restauration-screen', RestaurationScreen);