import ModelScreen from "./ModelScreen.js";
import ReservationsComponent from "../components/ReservationsComponent.js";

export default class ReservationsScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new ReservationsComponent);
    }
}

customElements.define('reservations-screen', ReservationsScreen);