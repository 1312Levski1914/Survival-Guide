
import { getUserInfo } from "../api/auth.js";
import { html } from "../lib.js";
import { getUserData } from "../until.js";

const homeTemplate = () => html `
<section id="welcome">
    <h1>Welcome to Survival Guide</h1>
    <div id="logo"></div>
    <p>Your virtual journal to help you manage everyday life as an international in Denmark</p>
    
    <div id="btn-div" >
        <a href="/register" class ="button btnReg"><p>Les's get you started!</p></a>
        <a href = "/login" class="button btnLogin"><p>Already have an account? Log In!</p></a>
    </div>


    </section>
`

export function homeView(ctx){
    if(getUserData()){
        ctx.page.redirect('/mainView');
    }
   
    ctx.render(homeTemplate());
    let dots = document.querySelectorAll('.dots div')

    let par = document.querySelector('#welcome p').textContent.slice(0,5)
    for(let i = 0 ; i< dots.length; i++){
        if(par == 'Your '){
            if(i == 1){
                dots[i].style.backgroundColor ='#6EC3EF';
            }
        }else{
            console.log('error');
        }
    }
    getUserInfo()
}

