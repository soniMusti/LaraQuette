export default class FooterComponent extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
            <footer class="footer bg-thirdteal pt-3 pb-3 sticky-bottom">
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
        `
    } 
}

customElements.define('footer-component', FooterComponent);