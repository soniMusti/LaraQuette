export default class HomeScreen extends HTMLElement {
    
    constructor(){
        super();
        this.props = {}
        this.innerHtml = this.render();
        const cssLinks = document.styleSheets;
    }
    render(){
        return `bonjour`
    }


}