
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
            <div><div class="flag"></div><h3>FRANCE</h3></div>
        </section>
    <hr>
        <div class="firstSection">
            <h3>Name</h3>
            <p id= "firstName"></p>
            <button class="button btnProfile" id="edit-name">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>Email address</h3>
            <p id="email"></p>
            <button class="button btnProfile">Edit</button>
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
        <a href="/overallView" class ="button">Overall</a>
        <section id="collection">

        </section>

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
        firstName.textContent = userData.firstName + ' ' + userData.lastName
        let email = document.getElementById('email');
        email.textContent = userData.email;
    }
}


export function profileView(ctx) {
    
    ctx.render(profileTemplate());
    let userData = getUserData();
    updateInfo(userData)
    
    let btn = document.getElementById('edit-name');
    btn.addEventListener('click', () => {
        console.log(userData.firstName);
    })
    closeBtn(ctx,'profile','/mainView')
   
   
    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click',getLogout)

}