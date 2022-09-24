import {
    html
} from "../lib.js";


const EuOrNonEuStudentTemplate = () => html `
<section id="choice">
    <h1>Choose your module</h1>
    
    <div class="euStudent">
        <div></div>
    
        <a href="/profileView" class ="button">Apply as a EU student</a>
    </div>
    <div class="NonEuStudent">
        <div></div>
        <a href="/profileView" class ="button">Apply as a NON EU student</a>
    </div>
</section>
`

export function EuOrNonEuStudentView(ctx){
    ctx.render(EuOrNonEuStudentTemplate());

}