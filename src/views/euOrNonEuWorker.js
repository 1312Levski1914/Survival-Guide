import {
    html
} from "../lib.js";


const euOrNonEuWorkerTemplate = () => html `
<section id="choice">
    <h1>Choose your module</h1>
    
    <div class="euWorker">
        <div></div>
        <p></p>
        <a href="/profileView" class ="button">Apply as a EU worker</a>
    </div>
    <div class="NonEuWorker">
        <div></div>
        <a href="/profileView" class ="button">Apply as a NON EU worker</a>
    </div>
</section>
`

export function euOrNonEuWorkerView(ctx){
    ctx.render(euOrNonEuWorkerTemplate());

}