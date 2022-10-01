import {
    getAllAsCitizen
} from "../api/collections.js";
import {
    html
} from "../lib.js";
import {
    notify
} from "../notify.js";
import {
    getUserData, setUserData
} from "../until.js";
import { getLogout } from "../api/auth.js";
//import { signOut } from '../../node_modules/firebase/auth/'
import { getAuth, onAuthStateChanged} from '../../node_modules/firebase/firebase-auth.js';
import { closeBtn } from "../app.js";




const profileTemplate = (name,email) => html `
    <section id="profile">
        <div class = "closeBtn"></div>
        <div class="arrows left"></div>
        <div class= "arrows right"></div>  
        <div id='profile-picture' ></div>
        <div><i></i><h3>FRANCE</h3></div>
    <hr>
        <div class="firstSection">
            <h3>Name</h3>
            <p id= "firstName">${name}</p>
            <button class="button btnProfile" id="edit-name">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>Email address</h3>
            <p>${email}</p>
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
        db.collection('users').doc(user.uid).get().then(doc =>{
            let userData = {
                'firstName': doc.data().firstName,
                'lastName': doc.data().lastName,
                email: doc.data().email,
            };
            
            setUserData(userData)
            console.log(userData);
            document.getElementById('firstName').textContent = userData.firstName
            
        })

        //loggedInLinks.forEach(item => item.style.display = 'block');
        //loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        //loggedInLinks.forEach(item => item.style.display = 'none');
        //loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

export function profileView(ctx) {
    let userData = getUserData()
    ctx.render(profileTemplate(userData.firstName,userData.email));
    
    let btn = document.getElementById('edit-name');
    btn.addEventListener('click', () => {
        console.log(userData.firstName);
    })
    closeBtn('profile')
    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click',getLogout)

}