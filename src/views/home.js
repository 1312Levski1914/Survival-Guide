
import { getAll } from "../api/api.js";
import { getAllAsCitizen } from "../api/collections.js";
import { html } from "../lib.js";
import { getUserData } from "../until.js";

const homeTemplate = () => html `
<section id="welcome">
<h1>Welcome to Survival Guide</h1>
<img src="./images/SurvivalGuide-logo.png" alt="Logo is missing">
<p>Your virtual journal to help you manage everyday life as an international in Denmark</p>
<section>
    <div></div>
    <div></div>
    <div></div>
</section>
<div id="btn-div" >
    <a href="/register" class ="button">Les's get you started!</a>
    <a href = "/login" class="button">Already have an account? Log In</a>
</div>


</section>
`

export function homeView(ctx){
    if(getUserData()){
        
        ctx.page.redirect('/profileView');
    }
   
    ctx.render(homeTemplate());
}