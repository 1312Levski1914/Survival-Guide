import {
    html
} from "../lib.js";
import { notify } from "../notify.js";


const reminderTemplate = (card1,card2,card3) => html `
<section id="reminder">
    <h5>Let us remind you</h5>
    <input type="checkbox">
    <p class="reminderInfo">Enable notifacations to help us remind you about your progress.</p>
    <ul id="listOfNotification">
        ${reminderBox(card1)}
        ${reminderBox(card2)}
        ${reminderBox(card3)}

    </ul>
    <div id="btns">
        <a href="/studentOrWorker" class ="button"><p>Remind me</p></a>
        <a href="/studentOrWorker" class ="noBtn"><p>No, thanks</p></a>
        
    </div>
</section>
<div class="blueCircle"></div>
<div class="brownCircle"></div>
`
const reminderBox = (topic) => html`
    <div class="reminderLi">
        <div class="dot"></div>
        <h4>Survival Guide</h4>
        <p>${topic}</p>
    </div>
`

export function reminderView(ctx){
    ctx.render(reminderTemplate('Remember to apply for Health Card!','Check your progress!',"Remember to apply for Health Card!"));

    let ulList = document.getElementsByClassName('reminderLi');
    if(ulList){
        console.log(ulList.length);
        for(let i = 0 ; i < ulList.length; i++){
            if(i % 2 ==0){
                ulList[i].classList.add('notifyToLeft')
                console.log(ulList[i]);
            }else{
                ulList[i].classList.add('notifyToRight')
            }
        }
    }

}