
export default class RestaurationScreen extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
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
        `
    
    }
}

customElements.define('restauration-screen', RestaurationScreen);
