import { getUserInfo, login } from "../api/auth.js";
import { closeBtn } from "../app.js";
import {
    html
} from "../lib.js";
import { notify } from "../notify.js";
import { setUserData } from "../until.js";
import { setupUI } from "./profile.js";




const loginTemplate = (onSubmit) => html `
<section id="login">
        <div class = "closeBtn"></div>
        <div class="arrows left"></div>
        <div class= "arrows right"></div>   
    <form @submit = ${onSubmit} id="login-form">
        <div class="container">
            <h1>Sign in</h1>
            <p>New user? <span>Create an account</span></p>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <div>
            <input type="checkbox">
            <label>Keep me signed in</label>
            </div>
            <input type="submit" class="registerbtn button" value="Sign In">
            <div class="container signin">
                <div>
                    <div class='line'></div>
                    <p>Or Sign In With</p>
                    <div class='line'></div>
                </div>
                <div id="icons">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </div>
    </form>
</section>
`

export function loginView(ctx){
    ctx.render(loginTemplate(onSubmit));
    
    closeBtn(ctx, 'login')
    async function onSubmit(event){
        event.preventDefault();
        const formData= new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim()
        
      
        if(email == '' || password == ''){
            return notify('All fields are required')
        }
        
        
        
        await login(email,password)
            .then(()=>{
                getUserInfo();
                ctx.page.redirect('/mainView');
            })
        
    }
}