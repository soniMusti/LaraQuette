export default class NotFoundScreen extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
            <div class="container">
                <h2 class="text-center">404 Not Found</h2>
            </div>
        `
    }
}

customElements.define('notfound-screen', NotFoundScreen);