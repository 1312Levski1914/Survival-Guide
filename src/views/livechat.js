
import { getUserInfo } from "../api/auth.js";
import { html } from "../lib.js";
import { getUserData } from "../until.js";

const liveChatTemplate = () => html `
    <section id='liveChat'>
        <div id="backButton">
            <div></div>
            <div></div>
        </div>
        <section id="nameLastName">
            <h4></h4>
        </section>
    </section>

`

export function liveChatView(ctx){
    ctx.render(liveChatTemplate())
    
}

