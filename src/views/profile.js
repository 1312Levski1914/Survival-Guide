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




const profileTemplate = (name,email) => html `
    <div><img></div>
    <div><i></i><h3>FRANCE</h3></div>
    <hr>
    <div>
        <h3>Name</h3>
        <p>${name}</p>
        <button id="edit-name">Edit</button>
    </div>
    <hr>
    <div>
        <h3>Email address</h3>
        <p>${email}</p>
        <button>Edit</button>
    </div>
    <hr>
    <h3>What will you be using SG for?</h3>
    <input type="checkbox">
    <hr>
    <h3>Connect social accounts</h3>
    <div>
        <i></i>
        <i></i>
        <i></i>
    </div>
    <button id="logout">Logout</button>
    <a href="/overallView" class ="button">Overall</a>
    <section id="collection">

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
        })

        //loggedInLinks.forEach(item => item.style.display = 'block');
        //loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        //loggedInLinks.forEach(item => item.style.display = 'none');
        //loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

export function profileView(ctx) {
    setupUI()
    let userData = getUserData()
    ctx.render(profileTemplate(userData.firstName,userData.email));
    let btn = document.getElementById('edit-name');
    btn.addEventListener('click', () => {
        console.log(userData.firstName);
    })

    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click',getLogout)

}