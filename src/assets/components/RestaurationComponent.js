export default class RestaurationComponent extends HTMLElement{

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

customElements.define('restauration-component', RestaurationComponent);