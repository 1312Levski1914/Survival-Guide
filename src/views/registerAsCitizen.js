
import {
    html
} from "../lib.js";
let htmll = '';
export const setupTemplate = (data) => {
    htmll = '';

    data.forEach(element => {
        const guide = element.data();
        const li = `
        <li>
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
        </li>
        `;
        htmll += li;
    });
   
    
}
export function registerMenuView(ctx) {
    ctx.render(registerMenuTemplate());
    const guideList = document.querySelector('.section')
    guideList.innerHTML = htmll
}
const registerMenuTemplate = () => html `
    <div id="arrow-back"></div>
    <h1>Register as a citizen</h1>
    <div id="progress-bar"></div>
    <div id="arrow"></div>
    <div id="number">100%</div>
    <ul class="section">
        
    </ul>
`


/* 



let registerUl;

let sectionTemplate = (section) => html `
<section>
    <div></div>
    <h2>${section.title}</h2>
    <p>${section.description}</p>
    <button>Read More</button>
</section>
`   
export function setupTemplate(data){
    let html = '';
    data.forEach(element => {
        const section = element.data();
       const li = sectionTemplate(section)
        html += li
    });
    registerUl.innerHTML = html;
}
 */