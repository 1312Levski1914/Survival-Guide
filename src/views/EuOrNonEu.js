import {
    html
} from "../lib.js";
import { getUserData, setUserData } from "../until.js";


const EuOrNonEuStudentTemplate = () => html `
<section id="choice">
    <h2>Choose your module</h2>
    
    <div class="choice euStudent blueCircleChoice">
        <div></div>
    
        <a href="/mainView">Apply as a EU student</a>
    </div>
    <div class="choice NonEuStudent blueCircleChoice">
        <div></div>
        <a href="/mainView">Apply as a NON EU student</a>
    </div>
</section>
`

export function EuOrNonEuStudentView(ctx){
    ctx.render(EuOrNonEuStudentTemplate());
    let userData = getUserData();
    let section = document.getElementById('choice');
    let divs = section.querySelectorAll('.choice');
    divs[0].addEventListener('click',() => {
        userData['status'] = 'EU Student';
        setUserData(userData)       
    })
    divs[1].addEventListener('click',() => {
        userData['status'] = 'Non Eu Student';
        setUserData(userData)
    })
    let aTag = divs[0].querySelector('a');
    aTag.classList.add('styleEuStudent')
}