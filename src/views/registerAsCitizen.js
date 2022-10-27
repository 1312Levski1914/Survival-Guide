import {
    closeBtn
} from "../app.js";
import {
    html
} from "../lib.js";
import {
    calculateProgress,
    styleAllOptions,
    ticksFunction
} from "../until.js";


export function registerMenuView(ctx) {
    ctx.render(registerMenuTemplate());
    const guideList = document.querySelector('.sectionWithSteps')
    guideList.innerHTML = htmll
    let pTags = guideList.querySelectorAll('p');
    pTags.forEach(x => x.style.display = 'none')
    let h3Tag = guideList.querySelectorAll('button')
        .forEach(x => x.addEventListener('click', showMore))

    const backArrow = document.getElementById('info').querySelector('i').addEventListener('click', () => {
        let ticks = document.getElementsByClassName('tickBox').length

        if (ticks == 0) {
            ticks = '0';
        } else if (ticks == 1) {
            ticks = '15';
        } else if (ticks == 2) {
            ticks = '30';
        } else if (ticks == 3) {
            ticks = '47';
        } else if (ticks == 4) {
            ticks = '65';
        } else if (ticks == 5) {
            ticks = '83';
        } else if (ticks == 6) {
            ticks = '100';
        }
        db.collection('users')
            .doc(auth.currentUser.uid)
            .update({
                "citizenProgress": ticks,
            })
            .then(() => {
                
            })

        ctx.page.redirect('/mainView')
    })
    styleAllOptions('stepsRows', 'info')
    ticksFunction('registerAsCitizen');
    calculateProgress('registerAsCitizen')



}


function showMore(x) {
    let btn = x.currentTarget;
    let section = btn.parentElement.parentElement;
    

    let p = section.querySelector('p');
    if (p.style.display == 'block') {
        p.style.display = 'none';

        btn.textContent = 'More';
    } else {
        p.style.display = 'block';

        btn.textContent = 'Less';

    }

}



let htmll = '';
export const setupTemplateforCitizen = (data) => {
    htmll = '';

    data.forEach(element => {
        const guide = element.data();
        const li = `
        <li class="stepsRows">
            <div class="tickBox tick"></div>
            
            <h3>${guide.title}</h3>
            <div class="descripeAndLine">
                <div class="line"></div>
                <p>${guide.description}</p>
            </div>
            <button class="button stepsRowBtn">Read More</button>
        </li>
        `;
        htmll += li;
    });


}

const registerMenuTemplate = () => html `
    <section id="registerAsCitizen">

        <nav>
            <img class="logoInNav" src="./images/SurvivalGuide-logo.png">
            <section>
                <h3>Survival</h3>
                <h3>Guide</h3>
            </section>
        </nav>
        
        <section id="info">
           
            <div class="header">
            <i class="gg-arrow-left backArrow"></i>
                <h5>Register as a citizen</h5>
                <div id="progress-bar"><div class="full"></div><div class="empty"></div></div>
                <div class="arrowNumber">
                    <div id="arrow"></div>
                    <p id="number" class="numberForCitizen">100%</p>
                </div>
            </div>
            <ul class="sectionWithSteps">
                
            </ul>
        </section>
    </section>
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