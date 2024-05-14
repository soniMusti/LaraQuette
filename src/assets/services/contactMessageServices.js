import ContactMessage from "../models/contactMessage.js";

export default class ContactMessageServices {

    #data = [];

    constructor() {
        if(localStorage.getItem("ContactMessageList")){
            this.getItemsFromLocal();
        } else {
            this.setItemsInLocal(this.#data);
        }
    }

    create(instance){
        if(instance instanceof ContactMessage){
            this.#data.push(instance);
            this.setItemsInLocal(this.#data);
        } else {
            throw new Error(`${instance} is not an instance of "Contact Message"`)
        }
    }

    read(filter){
        this.getItemsFromLocal();
        return this.#data.filter(filter);
    }

    delete(instance){
        let temp = -1;
        for (let i = 0; i< this.#data.length;i++){
            if(this.#data[i].id == instance.id){
                temp = i;
                break;
            }
        }
        if(temp != -1){
            this.#data.splice(temp,1);
            this.setItemsInLocal(this.#data);
            console.warn(`${instance} supprimée`)
        } else {
            throw new Error (`${instance} not found`)
        }
    }

    deleteIndex(index){
        if(index > -1){
            this.#data.splice(index,1);
            this.setItemsInLocal(this.#data);
            console.warn(`Message supprimé`)
        } else {
            throw new Error (`Message not found`)
        }
    }
    
    update(instance){

    }

    getItemsFromLocal(){
        this.#data = JSON.parse(localStorage.getItem("ContactMessageList")).map(contact => new ContactMessage(contact));
        
    }

    setItemsInLocal(value){
        localStorage.setItem("ContactMessageList", JSON.stringify(value));
    }
}