export default class ReservationsComponent extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
        <div>page à faire</div>
    `   
    }
}

customElements.define('reservations-component', ReservationsComponent);