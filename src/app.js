
import {  render} from './lib.js';

import { getUserData } from "./until.js";
import { bankMenuView } from './views/bankAccount.js';
import { carMenuView } from './views/carAndDrivingLicense.js';
import { chatView } from './views/chatView.js';
import { digitalMenuView } from './views/digitalServices.js';
import { EuOrNonEuStudentView } from "./views/EuOrNonEu.js";
import { euOrNonEuWorkerView } from "./views/euOrNonEuWorker.js";
import { homeView } from "./views/home.js";
import { housingMenuView } from './views/housing.js';
import { jobsMenuView } from './views/jobsView.js';
import { liveChatView } from './views/livechat.js';
import { loginView } from "./views/login.js";
import { mainView } from './views/main.js';
import { newsView } from './views/news.js';
import { notificationView } from './views/notification.js';

import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";
import { registerMenuView } from './views/registerAsCitizen.js';
import { reminderView } from "./views/reminder.js";
import { choiceStudentOrWorkerView } from "./views/studentOrWorker.js";


const main = document.querySelector('main');
document.getElementById('notifications').style.display = 'none';


//document.getElementById('logoutBtn').addEventListener('click' ,onLogout);

page(decorateContext);
page('/',homeView);
page('/login',loginView);
page('/register', registerView);
page('/reminder',reminderView)
page('/studentOrWorker',choiceStudentOrWorkerView);
page('/euOrNonEuStudent',EuOrNonEuStudentView);
page('/euOrNonEuWorkerView', euOrNonEuWorkerView)
page('/profileView', profileView);
page('/registerAsCitizen',registerMenuView)
page('/mainView',mainView);
page('/newsView', newsView);
page('/liveChatView',liveChatView);
page('/bankMenuView',bankMenuView)
page('/digitalMenuView',digitalMenuView);
page('/carMenuView', carMenuView);
page('/housingMenuView',housingMenuView);
page('/jobsMenuView',jobsMenuView)
page('/notificationView', notificationView);
page('/chatView', chatView);


//updateNav();
page.start();
page('/')


function decorateContext(ctx,next){
    ctx.render = renderMain;
    //ctx.updateNav = updateNav;
    next();
}

function renderMain(templateResult){
    render(templateResult, main);
}
export function closeBtn(ctx,section, remote){
    section = document.getElementById(section)
    
    let closeBtn = section.querySelector('.closeBtn');
    let lines = section.querySelectorAll('.arrows')

    lines.forEach(x => x.addEventListener('click', () => {
        if(remote){
            ctx.page.redirect(remote)
        }else{

            history.back()
        }
    }))
    closeBtn.addEventListener('click', () =>{
        if(remote){
            ctx.page.redirect(remote)
        }else{

            history.back();
        }
    })
}
/* 
function updateNav(){
    const userData = getUserData();

    if(userData){
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user div span').textContent = `Welcome, ${userData.email}`;
    }else{
        console.log('no user');
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}
*/
