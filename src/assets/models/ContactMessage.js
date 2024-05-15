export default class ContactMessage {

    static #num = 0;

    #id;
    #nom;
    #prenom;
    #email;
    #message;
    isRead = false;

    constructor(props) {
        const {id, nom, prenom, email, message} = props;
        this.id = id || "contact" + (++ContactMessage.#num).toString();
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.message = message;
    }

    get id(){
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get nom(){
        return this.#nom;
    }

    set nom(value) {
        if(!value || (typeof value) !== "string") {
            throw new Error ("Veuillez entrer un nom valide");
        }
        this.#nom = value;
    }
    get prenom(){
        return this.#prenom;
    }

    set prenom(value) {
        if(!value || (typeof value) !== "string") {
            throw new Error ("Veuillez entrer un prenom valide");
        }
        this.#prenom = value;
    }
    get email(){
        return this.#email;
    }

    set email(value) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        if(regex.test(value)) {
            this.#email = value;
        } else {
            throw new Error (`"${value}" n'est pas un mail valide !`);
        }
    }
    get message(){
        return this.#message;
    }
    // */+€!:;,?<> 
    set message(value) {
    const regex = /^[a-zA-Z0-9.-/*+€!:;,?<> ]{10,}$/;
        if(!value || (typeof value) !== "string" || !(regex.test(value)) ) {
            throw new Error ("Veuillez décrire en minimum 10 caractères la raison de votre contact");
        }
        this.#message = value;
    }

    toJSON(){
        const json = {};
        const descriptors = Object.getOwnPropertyDescriptors(this.constructor.prototype)
        for (const prop in descriptors) {
            const descriptor = descriptors[prop];
            if(descriptor.get || descriptor.set){
                json[prop] = this[prop];
            }
        }
        return json;
    }

}