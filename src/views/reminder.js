import {
    html
} from "../lib.js";
import { notify } from "../notify.js";


const reminderTemplate = () => html `
<section id="reminder">
    <h1>Let us remind you</h1>
    <input type="checkbox">
    <p>Enable notifacations to help us remind you about your progress.</p>
    ${reminderBox('Health Card')}
    <div>
        <a href="/studentOrWorker" class ="button">Remind me</a>
        <a href="/studentOrWorker" class ="button">No, thanks</a>
        
    </div>
</section>
`
const reminderBox = (topic) => html`
    <div>
        <div class="dot"></div>
        <h4>Survival Guide</h4>
        <p>Remember to apply for ${topic}</p>
    </div>
`

export function reminderView(ctx){
    ctx.render(reminderTemplate());

}