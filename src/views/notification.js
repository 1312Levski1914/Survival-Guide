
import {
    html,
} from "../lib.js";
import { getUserData } from "../until.js";


const notificationTemplate = () => html `
<section id="notification">
    <section id="navBar">
        <img src="../../images/SurvivalGuide-logo.png">
        <h1>Survival Guide</h1>
    </section>
    <section id="myTasks">
        <section></section>
        <h1>My tasks</h1>
        <div class="myTasksSection">
            <div class="showTasksInfo">
                <img src="../../images/icon-progress.png">
                <div>
                    <h5>In Progress</h5>
                    <p>1 tasks now</p>
                </div>
            </div>
            <div class="showTasksInfo">
                <img class="img2" src="../../images/icon-done.png">
                <div>

                    <h5>Done</h5>
                    <p>3 tasks now</p>
                </div>
            </div>
        </div>
    </section>
    <section class="notiElement popup1">
        <div class="edge"></div>
    </section>
    <section class="notiElement popup2">
        <div class="edge"></div>
        <div class="content">
            <img src="../../images/icon-reminders.png">
            <p>Check your progress!</p>
            <span>1h</span>
        </div>

    </section>
    <section class="notiElement popup3">
        <div class="edge"></div>
        <div class="content">
            <img src="../../images/icon-reminders.png">
            <p>The deadline for applying to SU loan is 15 September!</p>
            <span>5h</span>
        </div>
    </section>
    <section class="notiElement popup4">
        <div class="edge"></div>
        <div class="content">
            <img src="../../images/icon2-reminders.png">
            <p>Discover more about Denmark!</p>
            <span>10h</span>
        </div>
    </section>
    <section id="footerForNotify">
        <section class="backgroundPic">
        </section>
        <div class="newsBtn"></div>
        <div class="homeBtn"></div>

    </section>
</section>

`
export function notificationView(ctx){
    
    ctx.render(notificationTemplate());
    


    let siteMap = document.getElementById('footerForNotify');
    let newsIcon = siteMap.querySelector('.newsBtn')
    let homeImg = siteMap.querySelector('.homeBtn');
    homeImg.addEventListener('click',() =>{
        ctx.page.redirect('/mainView')
    })
    
    newsIcon.addEventListener('click',() => {
        ctx.page.redirect('/newsView');
    })
    
}

