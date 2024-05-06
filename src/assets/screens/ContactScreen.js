
export default class ContactScreen extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
        <div class="bg-firstblue">  
<div class="bg-firstblue d-flex flex-column justify-content-between">    
    <header>
        <nav class="navbar navbar-expand-lg bg-thirdteal">
            <div class="container-fluid">
                <a class="nav-link active" aria-current="page" href="/index" target="spa">
                    <img src="./src/assets/img/logo.png" alt="Logo raquette balle" width="75" height="auto" class="d-inline-block align-text-top">                 
                </a>
                <a class="nav-link active ps-2" aria-current="page" href="/index" target="spa">
                    <h1 class=" fs-2">LaraQuette</h1>
                </a>
                <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="menu">
                    <ul class="navbar-nav me-5">
                        <li class="nav-item">
                            <a class="nav-link" href="/restauration" target="spa">RestoBar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/nosCoachs" target="spa">Nos Coatchs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact" target="spa">Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Réservations
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/reservations" target="spa">Cours</a></li>
                                <li><a class="dropdown-item" href="/reservations" target="spa">Coatching</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
    </header>
</div>
<div class="container-fluid secondcontainer d-flex align-items-center"
        style="background-image: url(/src/assets/img/padelFilet2.jpeg); ">
        <div class="container text-center mt-4 mb-4 justify-content-center ">
            <div class="row justify-content-center  ">
                <div class="col-8  m-5 p-3 bg-fourteal rounded-2">
                    <div class="text-center text-firstblue">
                        <h2>Notre centre</h2>
                    </div>
                    <div class="text-center">
                        <p>
                            1028 Avenue du pain au chocolat
                            <br />
                            06250 Mougins
                            <br>
                            <a class="text-decoration-none link-firstblue"
                                href="mailto:contact@laraQuette.fr">contact@laraQuette.fr</a>
                        </p>
                        <a class="text-decoration-none link-firstblue" href="tel:+33606987441">0606987441</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container text-center p-2">
        <div class="row justify-content-center m-5">
            <div class="col-4  rounded-2 mt-5 ">
                <h2 class="fw-bold text-thirdteal">Contact</h2>
                <h4 class="text-thirdteal fw-semibold">Nos Horaires</h4>
                <p class="fw-medium text-thirdteal">
                    <strong>Lundi au vendredi</strong>
                    <br />
                    10h-22h30
                </p>
                <p class="fw-medium text-thirdteal">
                    <strong>Samedi au dimanche</strong>
                    <br />
                    9h-20h
                </p>
                <h4 class="text-thirdteal fw-semibold">Une question?</h4>
                <p class="fw-medium text-thirdteal">
                    Nous sommes à votre écoute,
                    <br />
                    prenez contact via le formulaire.
                </p>
            </div>
            <div class="col-4  rounded-2 m-2">
                <form action="contact.html">
                <div class="row justify-content-center input-group">
                    <div input-init class=" col-sm-6">
                        <label for="nom"></label>
                        <input class="form-control" type="text" id="nom" placeholder="Nom" required />
                    </div>
                    <div input-init class=" col-sm-6 ">
                        <label for="Prenom"></label>
                        <input class="form-control" type="text" id="prenom" placeholder="Prenom" required />
                    </div>
                    <div input-init class=" ">
                        <label for="email"></label>
                        <input class="form-control form-outline" type="email" id="email" placeholder="Email" required />
                    </div>
                    <div input-init class="">
                        <label for="message"></label>
                        <textarea class="form-control" name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button data-mdb-ripple-init type="button" class="btn btn-firstblue mt-2 btn-block mb-4">Envoyer</button>
                    </div>
                </form>

                </div>

            </div>
        </div>
    </div>

</main>
</div>
        `
    
    }
}

customElements.define('contact-screen', ContactScreen);
