import { login } from "../api/auth.js";
import {
    html
} from "../lib.js";
import { notify } from "../notify.js";
import { setUserData } from "../until.js";
import { setupUI } from "./profile.js";




const loginTemplate = (onSubmit) => html `
<section id="login">
    <form @submit = ${onSubmit} id="login-form">
        <div class="container">
            <h1>Sign in</h1>
            <p>New user? <span>Create an account</span></p>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="checkbox">
            <label>Keep me signed in</label>
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

    async function onSubmit(event){
        event.preventDefault();
        const formData= new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim()
        
        let userData = {
            email,
            password,
        }
        if(email == '' || password == ''){
            return notify('All fields are required')
        }

        setupUI()
        setUserData(userData);
        await login(email,password)
        setupUI()
        ctx.page.redirect('/profileView');
    }
}