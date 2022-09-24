import { saveUserInfo } from "../until.js";
import page from '../../node_modules/page/page.mjs'
import { setupTemplate } from "../views/registerAsCitizen.js";

db.collection('registerAsCitizen').get()
    .then(snapshot => {
       setupTemplate(snapshot.docs)
    })

auth.onAuthStateChanged(user => { 
    if(user){
        console.log('user logged in');
    }else{
        console.log('user logout');
    }
})
export function logout() {
    return auth.signOut();
}

export function register(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function login(email, password) {
    
    return auth.signInWithEmailAndPassword(email, password)
}

export function postRegister(ctx){
    const { username, password,rePass} = ctx.params;
    console.log(ctx.params)
    if(password !== rePass ){
        alert('password are not same')
        throw new Error(`Password does'nt  match`)
    }
    register(username,password)
        .then(res => {
            saveUserInfo(res.user.email);
            ctx.redirect('/')
        })
        .catch(e => console.log(e));
}

export function postLogin(ctx){
    
}

export function getLogout(ctx){
    logout()
        .then(res => {
            sessionStorage.clear();
            page.redirect('/')
        }).catch(e => console.log(e))
}