
import { html } from "../lib.js";
import { getUserData } from "../until.js";

const homeTemplate = () => html `
<section id="welcome">
    <h1>Welcome to Survival Guide</h1>
    <img src="./images/SurvivalGuide-logo.png" alt="Logo is missing">
    <p>Your virtual journal to help you manage everyday life as an international in Denmark</p>
    <section id="dots">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
    </section>
    <div id="btn-div" >
        <a href="/register" class ="button btnReg"><p>Les's get you started!</p></a>
        <a href = "/login" class="button btnLogin"><p>Already have an account? Log In!</p></a>
    </div>


    </section>
`

export function homeView(ctx){
    if(getUserData()){
        
        ctx.page.redirect('/profileView');
    }
   
    ctx.render(homeTemplate());
}