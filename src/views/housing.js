

import {
    html
} from "../lib.js";
import { calculateProgress, progresBar, styleAllOptions, ticksFunction } from "../until.js";


export function housingMenuView(ctx) {
    ctx.render(housingMenuTemplate());
    const guideList = document.querySelector('.sectionWithSteps')
    guideList.innerHTML = htmll
    let pTags = guideList.querySelectorAll('p');
    pTags.forEach(x => x.style.display = 'none')
    let h3Tag = guideList.querySelectorAll('button')
    .forEach(x => x.addEventListener('click',showMore))

    const backArrow = document.getElementById('info').querySelector('i').addEventListener('click',() => {
        let ticks = document.getElementsByClassName('tickBox').length
        
        if(ticks == 0){
            ticks = '0';
        }else if(ticks == 1){
            ticks = '25';
        }else if(ticks == 2){
            ticks = '50';
        }else if(ticks == 3){
            ticks = '75';
        }else if(ticks == 4){
            ticks = '100';
        }
        db.collection('users')
            .doc(auth.currentUser.uid)
            .update({
                "housing": ticks,
            })
            .then(() => {
                console.log('Data');
            })
        
        ctx.page.redirect('/mainView')
    })
    styleAllOptions('stepsRows','housing')
    progresBar('Housing')
    ticksFunction('housingMenuView');
    calculateProgress('housingMenuView')
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
export const setupTemplateforHousing = (data) => {
    htmll = '';

    data.forEach(element => {
        const guide = element.data();
    
        const li = `
        <li class="stepsRows">
            <div class="tickBox"></div>
            
            <h3>${guide.title}</h3>
            <div class="descripeAndLine">
                
            <div class="line"></div><p>${guide.description}</p>
            </div>
            <button class="button stepsRowBtn">Read More</button>
        </li>
        `;
        htmll += li;
    });
   
    
}

const housingMenuTemplate = () => html `
    <section id="bankAccount">

        <nav><img class="logoInNav" src="./images/SurvivalGuide-logo.png">
        <section>
            <h3>Survival</h3>
            <h3>Guide</h3>
        </section>
        </nav>
        
        <section id="info">
            <div class="header">
                <i class="gg-arrow-left backArrow"></i>
                <h5>Housing</h5>
                <div id="progress-bar"><div class="full"></div><div class="empty"></div></div>
                <div class="arrowNumber">
                    <div id="arrow"></div>
                    <p id="number" class="numberForCitizen">50%</p>
                </div>
            </div>
            <ul class="sectionWithSteps">
                
            </ul>
        </section>
    </section>
`
