import { register } from "../api/auth.js";
import { closeBtn } from "../app.js";
import {
    html
} from "../lib.js";
import {
    notify
} from "../notify.js";
import { getUserData, setUserData } from "../until.js";

//import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
/*
const auth = getAuth();
createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user= userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
 */
const registerTemplate = (onSubmit) => html `
<section id="register">
    <div class = "closeBtn"></div>
    <div class="arrows left"></div>
    <div class= "arrows right"></div>
    <h1>Sign Up</h1>
    <p>Already an user? <span class = "signIn">Sign In</span></p>
    <form @submit = ${onSubmit} id = "Sign-up-Form" action="#/register" method="post">
        <div class= "container">
            <label><input id="firstName" type="text" placeholder="First Name" name="firstName" ></label>
            <label><input id="lastName" type="text" placeholder="Last Name" name="lastName"></label>
            
            <label><input id="email" type="email" placeholder="E-Mail" name="email"></label>
            
            <label><input id= "password"  type="password" placeholder="Password" name="password"></label>
            
            <input type="submit" class="button registerbtn" value="Sign Up">
        </div>
    </form>
    <div id="orSignInText">
        <div></div>
        <p>Or Sign In With</p>
        <div></div>
    </div>
    <section id="social">
        <i></i>
        <i></i>
        <i></i>
    </section>
</section>
`
export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));
    const signupForm = document.querySelector('#Sign-up-Form')
    closeBtn(ctx,'register')
    async function onSubmit(event) {
        event.preventDefault();

        //get user info
        const email = signupForm['email'].value;
        const password = signupForm['password'].value
        const firstName = signupForm['firstName'].value;
        const lastName = signupForm['lastName'].value;

        //sign up to the user
        register(email,password,firstName,lastName)
       
        let userData = {
            'firstName': firstName,
            'lastName': lastName,
            email,
            password
        }
        setUserData(userData)
        console.log(getUserData());
        ctx.page.redirect('/reminder');

    }
    let inputs = signupForm.querySelectorAll('input');
    inputs.forEach(x => {
        x.classList.add('colorInputs');
    })
    
}


/* 
export function registerView(ctx){
    console.log('hi i am here');
    ctx.render(registerTemplate(onSubmit));
    async function onSubmit(event){
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const username = formData.get('firstName').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim()
        let lastName = formData.get('lastName').trim();
        
        console.log(username,email,lastName);
        let userData = {
            username,
            email,
            lastName,
            dateExample: Timestamp.fromDate(new Date("December 10, 1955")),
        }
        await setDoc(doc(userData,'data','users'));
        setUserData(userData)
        try{
            await register(email,password)

        }catch(err){
            notify(err.message)
            throw new Error(err.message)
        }
        
    }
    
}
*/