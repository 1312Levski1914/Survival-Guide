import { setUserData } from "../until.js";
import page from '../../node_modules/page/page.mjs'
import { setupTemplate } from "../views/registerAsCitizen.js";
import { setupUI } from "../views/profile.js";
import { notify } from "../notify.js";


auth.onAuthStateChanged(user => { 
    if(user){
        db.collection('registerAsCitizen').onSnapshot(snapshot => {
            setupTemplate(snapshot.docs)
            setupUI(user);
           
    },err => {
        notify(err.message)
    });
    }else{
        setupTemplate([])
        setupUI()
    }
})
export function logout() {
    return auth.signOut();
}

export function register(email, password,) {
    return auth.createUserWithEmailAndPassword(email, password)
}

export function login(email, password) {
    
    return auth.signInWithEmailAndPassword(email, password)
}

export function getLogout(ctx){
    logout()
        .then(res => {
            sessionStorage.clear();
            page.redirect('/')
        }).catch(e => console.log(e))
}

/*
export function postRegister(ctx){
    const { firstName, password,rePass} = ctx.params;
    console.log(ctx.params)
    if(password !== rePass ){
        alert('password are not same')
        throw new Error(`Password does'nt  match`)
    }
    register(username,password,firstName,lastName)
        .then(res => {
            setUserData(res.user.email);
            ctx.redirect('/')
        })
        .catch(e => console.log(e));
} */