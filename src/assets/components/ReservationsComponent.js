export default class ReservationsComponent extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
        <style>@import "./src/assets/css/reservation.css"</style>
        <main class="bg-firstblue bg-size vh-100 container-fluid">

        <div class="row justify-content-center">
            <div class="col-8 p-1 bg-thirdteal rounded-2 my-5">
                <div class="text-center text-firstblue">
                    <h2>Réservation de cours</h2>
                </div>
                <div class="text-center">
                    <p>
                        Veuillez remplir le formulaire pour réserver un créneau
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center p-1">
            <div class="row justify-content-center">
                <form novalidate></form>
                <div class="col-12">
                    <div class="row mb-5">
                        <div input-init class="col-sm-6 mb-2">
                            <label for="nom" class="text-fourteal">Nom</label>
                            <input class="form-control" type="text" name="nom" id="nom" placeholder="Nom" required />
                        </div>
                        <div input-init class="col-sm-6">
                            <label for="prenom" class="text-fourteal">Prénom</label>
                            <input class="form-control" type="text" name="prenom" id="prenom" placeholder="Prenom"
                                required />
                        </div>
                        <div input-init class="col-sm-6 mb-4">
                            <label for="email" class="text-fourteal">E-mail</label>
                            <input class="form-control form-outline" name="email" type="email" id="email"
                                placeholder="Email" required />
                        </div>
                        <div input-init class="col-sm-6">
                            <label for="telephone" class="text-fourteal">Téléphone</label>
                            <input class="form-control form-outline" name="telephone" type="telephone" id="telephone"
                                placeholder="Téléphone" required />
                        </div>
                        <div input-init class="col-sm-6 mb-2">
                            <label for="nbPersonne" class="text-fourteal">Nombre de personnes</label>
                            <input class="form-control form-outline" name="nbPersonne" type="number" id="nbPersonne"
                                placeholder="Nombre de personnes" required />
                        </div>
                        <div input-init class="col-sm-6">
                            <label for="sport" class="text-fourteal">Veuillez choisir le sport :</label>
                            <select name="sport" id="sport" class="form-select">
                                <option value="squash">Squash</option>
                                <option value="padel">Padel</option>
                                <option value="bad">Badminton</option>
                            </select>
                        </div>
                    </div>
                    <div class="row input-group">
                        <div input-init class="col-sm-4 mb-4">
                            <input class="form-check-input" name="location" type="checkbox" id="location" required>
                                <label for="email" class="form-check-label text-fourteal">Location de chaussures</label>
                            </input>
                        </div>
                        <div input-init class="col-sm-4">
                            <input class="form-check-input" name="location" type="checkbox" id="location" required>
                                <label for="email" class="form-check-label text-fourteal">Option boisson</label>
                            </input>
                        </div>
                        <div input-init class="col-sm-4">
                            <input class="form-check-input" name="location" type="checkbox" id="location" required>
                                <label for="email" class="form-check-label text-fourteal">Avec professeur</label>
                            </input>
                        </div>
                    </div>
                    <div class="row input-group">
                        <div input-init class="col-sm-4">
                            <label for="date" class="text-fourteal">Veuillez choisir la date :</label>
                            <select name="date" id="date" class="form-select">

                            </select>
                        </div>
                        <div input-init class="col-sm-4">
                            <label for="heure" class="text-fourteal">Veuillez choisir l'heure :</label>
                            <select name="heure" id="heure" class="form-select">
                                
                            </select>
                        </div>
                        <div input-init class="col-sm-4">
                            <label for="terrain" class="text-fourteal">Veuillez choisir le terrain :</label>
                            <select name="terrain" id="terrain" class="form-select">

                            </select>
                                
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-5
                ">
                    <button data-mdb-ripple-init type="submit"
                        class="btn btn-firstblue">Envoyer</button>
                </div>
                </form>
            </div>
        </div>
    </main>
    `   
    }
}

customElements.define('reservations-component', ReservationsComponent);