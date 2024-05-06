
export default class NosCoachsScreen extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
        <style>@import "./src/assets/css/nosCoachs.css"</style>
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
    
    <main>
    <div class="team-boxed bg-firstblue">
      <div class="container ">
          <div class="intro mt-5">
              <h2 class="text-center">NOS COACHS</h2>
              <p class="text-center firstText">Voici notre equipe de professionnel, pret à tout pour vous aider. Reservé votre cours des maintenants!</p>
          </div>
          <div class="row people">
              <div class="col-md-6 col-lg-4 item ">
                  <div class="box"><img class="rounded-circle" src="/src/assets/img/CoachG.png">
                      <h3 class="name">Gégé </h3>
                      <p class="title">Le Pro</p>
                      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia. Aspernatur, ipsa doloribus numquam nihil sed, fugit temporibus nesciunt magnam qui eius veniam culpa unde!</p>
                      <div class="social"><a href="/src/reservations.html">Reserver</a><a href="#"><img src="/src/assets/img/facebook.svg" alt=""></a><a href="#"><img src="/src/assets/img/instagram.svg" alt=""></i></a></div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 item ">
                  <div class="box"><img class="rounded-circle" src="/src/assets/img/coachAlexx.png">
                      <h3 class="name">Delorobia</h3>
                      <p class="title">Le dominateur</p>
                      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia. Aspernatur, ipsa doloribus numquam nihil sed, fugit temporibus nesciunt magnam qui eius veniam culpa unde!</p>
                      <div class="social"><a href="/src/reservations.html">Reserver</a><a href="#"><img src="/src/assets/img/facebook.svg" alt=""></a><a href="#"><img src="/src/assets/img/instagram.svg" alt=""></i></a></div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 item">
                  <div class="box"><img class="rounded-circle" src="/src/assets/img/CoachG.png">
                      <h3 class="name">Billy</h3>
                      <p class="title">Le Boss</p>
                      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia. Aspernatur, ipsa doloribus numquam nihil sed, fugit temporibus nesciunt magnam qui eius veniam culpa unde!</p>
                      <div class="social"><a href="/src/reservations.html">Reserver</a><a href="#"><img src="/src/assets/img/facebook.svg"  alt=""></a><a href="#"><img src="/src/assets/img/instagram.svg" alt=""></i></a></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </main>
  <footer class="footer bg-thirdteal pt-3 pb-3">
    <div class="container-fluid m-0 p-0">
        <div class="d-flex row align-items-center justify-content-between m-0">
            <div class="col-4 text-firstblue text-center d-flex justify-content-center">
                <span>&copy; 2024 France | Tous droits réservés</span>
            </div>
            <div class="col-4">
                <ul class="nav d-flex justify-content-center align-items-center">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-firstblue fs-4 pt-0 pb-0"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-firstblue fs-4 pt-0 pb-0"><i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-firstblue fs-4 pt-0 pb-0"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <ul class="nav d-flex flex-column flex-lg-row text-center m-0 p-0">
                    <li class="nav-item">
                        <a href="https://www.fft.fr" class="nav-link text-firstblue">FF Tennis</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.ffbad.org" class="nav-link text-firstblue">FF Badminton</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.ffsquash.com" class="nav-link text-firstblue">FF Squash</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</div>
        `
    
    }
}

customElements.define('noscoachs-screen', NosCoachsScreen);
