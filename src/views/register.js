
import { postRegister, register } from "../api/auth.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";
import { doc, setDoc, Timestamp} from "../../node_modules/firebase/firebase-firestore.js";
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
    <div class = "closeBtn">
        <div></div>
        <div></div>
    </div>
    <h1>Sign Up</h1>
    <p>Already an user? <span class = "signIn">Sign In</span></p>
    <form @submit = ${onSubmit} id = "Sign-up-Form" action="#/register" method="post">
        <div class= "container">
            <input id="firstName" type="text" placeholder="First Name" name="firstName" >
            <input id="lastName" type="text" placeholder="Last Name" name="lastName">
            <input id="email" type="email" placeholder="E-Mail" name="email">
            <input id= "password" type="password" placeholder="Password" name="password">
            <input id= "rePass" type="password" placeholder="Repeat Password" name="rePass">
            <input type="submit" class="registerbtn button" value="Sign In">
        </div>
    </form>
    <div>
        <div></div>
        <p>Or Sign In With</p>
        <div></div>
    </div>
    <section>
        <i></i>
        <i></i>
        <i></i>
    </section>
</section>
`
export function registerView(ctx){
    ctx.render(registerTemplate(onSubmit));
    const signupForm = document.querySelector('#Sign-up-Form')

    async function onSubmit(event){
        event.preventDefault();

        //get user info
        const email = signupForm['email'].value;
        const password = signupForm['password'].value

        //sign up to the user
        auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred)
            })
            .catch((err) => {
                notify(err.message)
            })
            ctx.page.redirect('/reminder');

    }
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