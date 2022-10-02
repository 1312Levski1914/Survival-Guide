import {
    html
} from "../lib.js";
import { getUserData, setUserData } from "../until.js";


const euOrNonEuWorkerTemplate = () => html `
<section id="choice">
    <h1>Choose your module</h1>
    
    <div class="choice euWorker">
        <div></div>
        <p></p>
        <a href="/mainView" class ="button">Apply as a EU worker</a>
    </div>
    <div class="choice NonEuWorker">
        <div></div>
        <a href="/mainView" class ="button">Apply as a NON EU worker</a>
    </div>
</section>
`

export function euOrNonEuWorkerView(ctx){
    ctx.render(euOrNonEuWorkerTemplate());
    let userData = getUserData();
    let section = document.getElementById('choice');
    let divs = section.querySelectorAll('.choice');
    divs[0].addEventListener('click',() => {
        userData['status'] = 'EU Worker';
        setUserData(userData)       
    })
    divs[1].addEventListener('click',() => {
        userData['status'] = 'Non Eu Worker';
        setUserData(userData)
    })
}