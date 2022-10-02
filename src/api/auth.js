import page from '../../node_modules/page/page.mjs'
import {
    setupTemplateforCitizen
} from "../views/registerAsCitizen.js";

import {
    notify
} from "../notify.js";
import { setUserData } from '../until.js';
import { setupUI, updateInfo } from '../views/profile.js';
import { setupTemplateforNews } from '../views/news.js';



auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('registerAsCitizen').onSnapshot(snapshot => {
            setupTemplateforCitizen(snapshot.docs)
            setupUI(user);
        }, err => {
            notify(err.message)
        });
        db.collection('news').onSnapshot(snapshot =>{
            setupTemplateforNews(snapshot.doc)

        },err => {
            notify(err.message)
        })
        getUserInfo()
        setupUI(user)

    } else {
        
        //setupUI()
    }
})
export function logout() {
    return auth.signOut();
}

export function register(email, password,firstName,lastName, ) {
    return auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            'firstName': firstName,
            'lastName': lastName,
            email,
            'userUid': cred.user.uid,
        })
    }).then(() => {
        let userData = {
            firstName,
            lastName,
            email,
        }
        setUserData(userData)
    }).catch((err) => {
        notify(err.message)
    })
}

export function login(email, password) {

    return auth.signInWithEmailAndPassword(email, password).then(cred => {
        db.collection('users').doc(cred.user.uid).get().then(doc =>{
            let userData = {
                'firstName': doc.data().firstName,
                'lastName': doc.data().lastName,
                'email': doc.data().email,
            }
            setUserData(userData);
            updateInfo(userData)
            
        })
    })
}

export function getLogout() {
    logout()
        .then(res => {
            sessionStorage.clear();
            page.redirect('/')
        }).catch(e => console.log(e))
}
export function getUserInfo(){
    let auths = firebase.auth();
    
    return auths.onAuthStateChanged(auth, (user) => {
        if(user){
            console.log('here');
            const uid = user.uid;
            let userData = {
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
            }
            setUserData(userData)
            console.log(uid);
        }else{
            console.log('here');
        }
    })
    
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