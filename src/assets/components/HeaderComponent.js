export default class HeaderComponent extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
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
                                    <a class="nav-link" href="/nosCoachs" target="spa">Nos Coachs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact" target="spa">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/reservations" target="spa">Réservation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('header-component', HeaderComponent);