export default class HomeComponent extends HTMLElement{

    constructor() {
        super(); // on appelle toujours le constructeur de la superClass (ici HTMLElement)

        this.innerHTML = this.render(); // j'affecter le nom de class (appelé par le render()) à la place du innerHTML hérité de la superClass
    }

    render() {
        return `
          <div class="bg-firstblue d-flex flex-column justify-content-between">    
              <main class="container">
                  <section class="col-12 text-center mb-4 py-4 my-md-3">
                      <h2 class="text-uppercase text-thirdteal border-bottom border-thirdteal fs-1 py-3">Complexe et école</h2>
                  </section>
                  <section class="d-flex flex-column align-items-center justify-content-between flex-md-row justify-content-around pt-md-5 pb-md-3 mt-md-5">
                      <div class="col-8 col-md-4 my-3 my-md-0">
                          <div id="carousel1" class="carousel slide">
                              <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="./src/assets/img/Padle_BallesRaquette_SolBleu.png" class="d-block w-100" alt="raquette padle balles">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Badminton_2_Enfants.avif" class="d-block w-100" alt="raquette badminton">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Squash_2_Personnes.jpg" class="d-block w-100" alt="squash homme femme">
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
                      <div class="col-8 col-md-4 mt-3 mt-md-0">
                          <div id="carousel2" class="carousel slide">
                              <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="./src/assets/img/Badminton_2_Enfants.avif" class="d-block w-100" alt="raquette padle balles">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Padle_BallesRaquette_SolBleu.png" class="d-block w-100" alt="raquette badminton">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Squash_2_Personnes.jpg" class="d-block w-100" alt="squash homme femme">
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
                  </section>
                  <section class="col-12 text-center py-5 my-5">
                      <h2 class="text-uppercase text-thirdteal fs-3 mb-3"><span class="border-end border-thirdteal pe-3">Padle</span><span class="border-end border-thirdteal px-3">Badminton</span><span class="ps-3">Squash</span></h2>
                      <h2 class="text-uppercase text-thirdteal border-top border-thirdteal fs-3 pt-3"><a class="link-thirdteal link-opacity-75-hover text-decoration-none" href="/reservations"  target="spa">réservez vos terrains</a></h2>
                  </section>
                  <section class="d-flex justify-content-around pt-0 pt-md-3">
                      <div class="col-8 col-md-6">
                          <div id="carousel3" class="carousel slide">
                              <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="./src/assets/img/Cours_Squash.jpg" class="d-block w-100" alt="raquette padle balles">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Cours_Squash2.jpg" class="d-block w-100" alt="raquette badminton">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Squash_2_Personnes.jpg" class="d-block w-100" alt="squash homme femme">
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                          <h2 class="text-uppercase text-center text-thirdteal fs-3 py-3">indoor</h2>
                      </div>
                  </section>
                  <section class="d-flex justify-content-around pb-0 pb-md-5">
                      <div class="col-8 col-md-6">
                          <h2 class="text-uppercase text-center text-thirdteal border-top border-thirdteal fs-3 py-3">outdoor</h2>
                          <div id="carousel4" class="carousel slide">
                              <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carousel4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carousel4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carousel4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="./src/assets/img/cours_padle.jpg" class="d-block w-100" alt="raquette padle balles">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Padle_BallesRaquette_SolBleu.png" class="d-block w-100" alt="raquette badminton">
                                </div>
                                <div class="carousel-item">
                                  <img src="./src/assets/img/Squash_2_Personnes.jpg" class="d-block w-100" alt="squash homme femme">
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
                  </section>
                  <section class="d-flex align-items-start">
                      <div class="col-6 text-center mt-4 mb-5 pt-5 pe-0">
                          <h2 class="text-uppercase text-thirdteal border-top border-end border-thirdteal fs-3 pt-3 my-0"><a class="link-thirdteal link-opacity-75-hover text-decoration-none" href="/restauration" target="spa">restauration</a></h2>
                          <div class="border-end border-thirdteal">
                              <a href="/restauration" target="spa"><img class="w-50 h-auto mt-3 pt-3" src="./src/assets/img/Chef.png" alt="menu"></a>
                          </div>
                      </div>
                      <div class="col-6 text-center pt-5 mt-4 mb-5 ps-0">
                          <h2 class="text-uppercase text-thirdteal border-top border-thirdteal fs-3 pt-3 my-0"><a class="link-thirdteal link-opacity-75-hover text-decoration-none" href="/restauration" target="spa">Enseignants</a></h2>
                          <div>
                              <a href="/nosCoachs" target="spa"><img class="w-50 h-auto mt-3 pt-3" src="./src/assets/img/coach-tennis.png" alt="menu"></a>
                          </div>
                      </div>
                  </section>
              </main>
          </div>
        `   
    }
}

customElements.define('home-component', HomeComponent);