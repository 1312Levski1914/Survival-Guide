
import {
    html
} from "../lib.js";


const registerMenuTemplate = () => html `
    <div id="arrow-back"></div>
    <h1>Register as a citizen</h1>
    <div id="progress-bar"></div>
    <div id="arrow"></div>
    <div id="number">100%</div>
    <ul id="registerUl">
        
    </ul>
`


export function registerMenuView(ctx) {

    
    ctx.render(registerMenuTemplate());
}
export function setupTemplate(data){
    data.forEach(element => {
        const section = element.data();
        console.log(section);
        const sectionTemplate = () => html `
    <section>
        <div></div>
        <h2>${section.title}</h2>
        <p>${section.description}</p>
        <button>Read More</button>
    </section>
`
        let registerUl = document.getElementById('registerUl');
        

    });
}