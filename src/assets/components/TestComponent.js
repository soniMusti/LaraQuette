import ContactMessageServices from "../services/contactMessageServices.js";

export default class TestComponent extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();

        this.querySelector("form").onsubmit = this.handleContactFormSubmit
    }

    handleContactFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        console.log(entries);
        const service = new ContactMessageServices();
        service.deleteIndex(entries.idObject);

    }

    getMessagesFromlocal(){
        const messages = new ContactMessageServices();
        let tab = messages.read(m => m.id.length > 0);
        let texte="";
        for (let m in tab) {
            texte += `<div class="card col-3">
            <div class="card-body">
                <p>${tab[m].message}</p>
            </div>
            <div class="card-footer">
                <form novalidate>
                    <input type="hidden" name="object" value="${tab[m].toJSON()}"/>
                    <input type="hidden" name="idObject" value="${m}"/>
                    <button type="submit" class="btn btn-thirdteal">Delete</button>
                </form>
            </div>
        </div>`
        }
        return texte;
    }

    render() {
        return `
            <main class='bg-firstblue'>
        <div class="container">
            <div class="row justify-content-center  ">
                <div class="col-8  m-5 p-3 bg-fourteal rounded-2">
                    <div class="text-center text-firstblue">
                        <h2>Vos messages de hater</h2>
                    </div>
                </div>
            </div>
            <div id="lesmessages">
                <div class="row">
                ${this.getMessagesFromlocal()}
                </div>
            </div>

        </div>
    </main>
        `    
    }
}

customElements.define('test-component', TestComponent);
