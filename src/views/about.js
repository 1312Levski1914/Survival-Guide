import {
    html
} from '../../node_modules/lit-html/lit-html.js';
const aboutTemplate = () => html `
<h2>About Us</h2>
<p>Contact: +45 50 32 75 58</p>`;
console.log('I am in about');

export function showAbout(ctx){
    ctx.render(aboutTemplate());
}
/*

 <section id="aboutView">
            <h2>About us</h2>
            <p> Phone: +45 50 32 75 58</p>
    </section>

const section = document.getElementById('aboutView');
section.remove();

export function showAbout(ctx){
    ctx.render(section)
}
 */