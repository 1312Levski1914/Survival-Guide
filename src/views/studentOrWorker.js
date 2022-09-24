import {
    html
} from "../lib.js";
import { EuOrNonEuStudentView } from "./EuOrNonEu.js";
import { page } from "../lib.js";


const choiceStudentOrWorkerTemplate = () => html `
<section id="choice">
    <h1>Choose your module</h1>
    
    <div class="blueCircle">
        <div></div>
        <a href="/euOrNonEuStudent" class ="button">Apply as a Student</a>
    </div>
    <div class="brownCircle">
        <div></div>
        <a href="/euOrNonEuWorkerView" class ="button">Apply as a Worker</a>
    </div>
</section>
`

export function choiceStudentOrWorkerView(ctx){
    //asStudent();    
    ctx.render(choiceStudentOrWorkerTemplate());

}
