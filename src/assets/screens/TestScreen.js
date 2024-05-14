import ModelScreen from './ModelScreen.js';
import TestComponent from "../components/TestComponent.js";

export default class TestScreen extends ModelScreen {

    constructor() {
        super();

        super.render(new TestComponent)
    }

}

customElements.define('test-screen', TestScreen);