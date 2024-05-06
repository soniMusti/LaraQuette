
export default class NosCoachsComponent extends HTMLElement{

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
            <style>@import "./src/assets/css/nosCoachs.css"</style>
            <main class="bg-firstblue d-flex flex-column justify-content-between">    
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
        `    
    }
}

customElements.define('noscoachs-component', NosCoachsComponent);
