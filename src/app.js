
import { page, render} from './lib.js';
import { getUserData } from "./until.js";
import { EuOrNonEuStudentView } from "./views/EuOrNonEu.js";
import { euOrNonEuWorkerView } from "./views/euOrNonEuWorker.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { overallView } from "./views/overallProgress.js";
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
page('/overallView',overallView);
page('/registerAsCitizen',registerMenuView)


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
