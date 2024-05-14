export default class ContactMessage {
    static newId = 0
    #id;
    #firstName;
    #lastName;
    #email;
    #message;

    constructor(props) {
        const { id, firstName, lastName, email, message} = props;
        this.id = id || "contact" + (++ContactMessage.newId).toString();
        this.firstName = firstName;
        this.lastName = lastName; 
        this.email = email;
        this.message = message;
    }

    get id() {
        return this.#id;
    }

    set id(value){
        if(value){ 
            this.#id = value;
        }
    }

    get firstName(){
        return this.#firstName;
    }

    set firstName(value){
        if ((typeof value) === 'string') {
            this.#firstName = value;
        } else {
            throw new Error("Le prénom doit contenir que des caractères ne contenant pas de chiffres.");
        }
    }

    get lastName(){
        return this.#lastName;
    }

    set lastName(value){
        if (typeof value === 'string' && !/\d/.test(value)) {
            this.#lastName = value;
        } else {
            throw new Error("Veuillez rentrer un nom de famille valide.");
        }
    }

    get email(){
        return this.#email;
    }

    set email(value){
        const expressionReguliere = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (expressionReguliere.test(value)){
            this.#email = value;
        } else{
            throw new Error(`${value} n'est pas une adresse e-mail valide.`);
        }
    }

    get message(){
        return this.#message;
    }

    set message(value){
        if (typeof value === 'string') {
            this.#message = value;
        } else {
            throw new Error("Le message doit contenir au moins 20 caractères.");
        }
    }

    toJSON(){
        return{
            id: this.#id,
            firstName: this.#firstName,
            lastName: this.#lastName,
            email: this.#email,
            message: this.#message
        }
    }
}
