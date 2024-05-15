import ContactMessage from "../models/ContactMessage.js";

export default class ContactMessageService {

    data = [];

    constructor() {
        if(localStorage.getItem('contactMessageList')) {
            this.getItemLocalStorage();
        } else {
            this.setItemLocalStorage(this.data);
        }

    }

    create(instance) {
        if (instance instanceof ContactMessage) {
            this.data.push(instance);
            this.setItemLocalStorage(this.data);
        }
    }

    read(filter) {
        this.getItemLocalStorage();
        return this.data.filter(filter);
    }

    update(instance) {

    }

    delete(instance) {

    }

    // méthode pour éviter de répéter le localStorage.getItem() et localStorage.setItem().
    getItemLocalStorage() {
        this.data = JSON.parse(localStorage.getItem('contactMessageList')).map(contact => new ContactMessage(contact));
    }

    setItemLocalStorage(instance) {
        localStorage.setItem('contactMessageList', JSON.stringify(this.data));
    }
}