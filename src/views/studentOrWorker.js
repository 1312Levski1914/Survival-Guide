import {
    html
} from "../lib.js";
import { EuOrNonEuStudentView } from "./EuOrNonEu.js";
import { page } from "../lib.js";
import { getUserData, setUserData } from "../until.js";


const choiceStudentOrWorkerTemplate = () => html `
<section id="choice">
    <h2>Choose your module</h2>
    
    <div class="choice blueCircleChoice">
        <div></div>
        <a href="/euOrNonEuStudent" >Apply as a Student</a>
    </div>
    <div class="choice brownCircleChoice">
        <div></div>
        <a href="/euOrNonEuWorkerView" >Apply as a Worker</a>
    </div>
</section>
`

export function choiceStudentOrWorkerView(ctx){
    //asStudent();    
     //sign up to the user
    
    ctx.render(choiceStudentOrWorkerTemplate());
    let userData = getUserData();
    let section = document.getElementById('choice');
    let divs = section.querySelectorAll('.choice');
    divs[0].addEventListener('click',() => {
        userData['status'] = 'Student';
        setUserData(userData)       
    })
    divs[1].addEventListener('click',() => {
        userData['status'] = 'Worker';
        setUserData(userData)
    })
}
