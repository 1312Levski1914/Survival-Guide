
import {
    html
} from "../lib.js";

import {
    getUserData, setUserData
} from "../until.js";
import { getLogout, getUserInfo } from "../api/auth.js";
//import { signOut } from '../../node_modules/firebase/auth/'

import { closeBtn } from "../app.js";





const profileTemplate = () => html `
    <section id="profile">
        <div class = "closeBtn"></div>
        <div class="arrows left"></div>
        <div class= "arrows right"></div>
        <section class="pictureAndCountry">    
            <div id='profile-picture'></div>
            <div id="country"><div class="flag"></div><h3>FRANCE</h3></div>
        </section>
    <hr>
        <div class="firstSection">
            <h3>Name</h3>
            <input id= "firstName" value="Name">
            <button class="button btnProfile" id="edit-name">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>Email address</h3>
            <input id= "email" value="email">
            <button class="button btnProfile" id="edit-email">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>What will you be using SG for?</h3>
            <input type="select">
        </div>
    <hr>
        <h3>Connect social accounts</h3>
        <section id="social">
        <i></i>
        <i></i>
        <i></i>
    </section>
        <button id="logout">Logout</button>

    </section>
`
export const setupUI = (user) => {
    if(user){
       
        db.collection('users').doc(user.uid).get().then(doc => {
            let userData = {
                'firstName': doc.data().firstName,
                'lastName': doc.data().lastName,
                email: doc.data().email,
            };
            setUserData(userData)
           
        
            
        })

        //loggedInLinks.forEach(item => item.style.display = 'block');
        //loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        //loggedInLinks.forEach(item => item.style.display = 'none');
        //loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}
export function updateInfo(userData){
    if(document.getElementById('firstName')){
        let firstName = document.getElementById('firstName');
        firstName.value = userData.firstName + ' ' + userData.lastName
        let email = document.getElementById('email');
        email.value = userData.email;
    }
}


export function profileView(ctx) {
    
    ctx.render(profileTemplate());
    let userData = getUserData();
    updateInfo(userData)
    
    let btn = document.getElementById('edit-name');
    let btnEmail = document.getElementById('edit-email')
    let names = document.getElementById('firstName')
    let email = document.getElementById('email')
    btn.addEventListener('click', () => {
        names.focus();
        
    })
    btnEmail.addEventListener('click', () => {
        email.focus();
        
    })
    closeBtn(ctx,'profile','/mainView')
   
   
    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click',getLogout)


}