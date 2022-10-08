
import {
    html
} from "../lib.js";
import { styleAllOptions } from "../until.js";


export function digitalMenuView(ctx) {
    ctx.render(digitalMenuTemplate());
    const guideList = document.querySelector('.sectionWithSteps')
    guideList.innerHTML = htmll
    let pTags = guideList.querySelectorAll('p');
    pTags.forEach(x => x.style.display = 'none')
    let h3Tag = guideList.querySelectorAll('button')
    .forEach(x => x.addEventListener('click',showMore))

    const backArrow = document.getElementById('info').querySelector('i').addEventListener('click',() => {
        ctx.page.redirect('/mainView')
    })
    styleAllOptions('stepsRows','digital')
    

}

function showMore(x){
    let btn = x.currentTarget;
    let section = btn.parentElement;
    let p = section.querySelector('p');
    if(p.style.display ==  'block'){
        p.style.display = 'none';
        btn.textContent = 'More';
    }else{
        p.style.display = 'block';
        btn.textContent = 'Less';

    }
    
}



let htmll = '';
export const setupTemplateforDigitalService = (data) => {
    htmll = '';

    data.forEach(element => {
        const guide = element.data();
        console.log(guide);
        const li = `
        <li class="stepsRows">
            <div></div>
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
            <button class="button stepsRowBtn">Read More</button>
        </li>
        `;
        htmll += li;
    });
   
    
}

const digitalMenuTemplate = () => html `
    <section id="digitalMenu">

        <nav><img class="logoInNav" src="./images/SurvivalGuide-logo.png">
        <section>
            <h3>Survival</h3>
            <h3>Guide</h3>
        </section>
        </nav>
        
        <section id="info">
            <i class="gg-arrow-left backArrow"></i>
            
            <h5>Get a tax card and a bank account</h5>
            <div id="progress-bar"></div>
            <div id="arrow"></div>
            <div id="number">75%</div>
            <ul class="sectionWithSteps">
                
            </ul>
        </section>
    </section>
`
