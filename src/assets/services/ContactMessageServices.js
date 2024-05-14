import ContactMessage from "../models/ContactMessage.js";

export default class ContactMessageService {

    data = [];

    constructor() {
        if(localStorage.getItem('contactMessageList')) {
            this.data = JSON.parse(localStorage.getItem('contactMessageList')).map(contact => new ContactMessage(contact))
        } else {
            localStorage.setItem('contactMessageList', JSON.stringify(this.data));
        }

    }

    create(instance) {
        if (instance instanceof ContactMessage) {
            this.data.push(instance);
            localStorage.setItem('contactMessageList', JSON.stringify(this.data));
        }
    }

    read(filter) {

    }

    update(instance) {

    }

    delete(instance) {

    }
}