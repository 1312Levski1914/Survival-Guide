import {
    page
} from '../lib.js'
import {
    setupTemplateforCitizen
} from "../views/registerAsCitizen.js";

import {
    notify
} from "../notify.js";
import {
    setUserData
} from '../until.js';
import {
    setupUI,
    updateInfo
} from '../views/profile.js';
import {
    setupTemplateforNews
} from '../views/news.js';
import {
    setupTemplateforBankAccount
} from '../views/bankAccount.js';
import {
    setupTemplateforDigitalService
} from '../views/digitalServices.js';
import { setupTemplateforCarAndLicence } from '../views/carAndDrivingLicense.js';
import { setupTemplateforHousing } from '../views/housing.js';
import { setupTemplateforJobs } from '../views/jobsView.js';




auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').onSnapshot(snapshot => {
            setupUI(user)
        },err=>{
            notify(err.message)

        });
        db.collection('mainViewTask').onSnapshot(snapshot => {
            setupTemplateforCitizen(snapshot.docs)
            setupUI(user);
        }, err => {
            notify(err.message)
        });

        db.collection("bankAccount").onSnapshot(snapshot => {
            setupTemplateforBankAccount(snapshot.docs);
        }, err => {
            notify(err.message);
        });

        db.collection("degitalService").onSnapshot(snapshot => {
            setupTemplateforDigitalService(snapshot.docs);
        }, err => {
            notify(err.message);
        });
        
        db.collection("carAndDrivingLicense").onSnapshot(snapshot => {
            setupTemplateforCarAndLicence(snapshot.docs);
        }, err => {
            notify(err.message);
        })
        
        db.collection("Housing").onSnapshot(snapshot => {
            setupTemplateforHousing(snapshot.docs);
        }, err => {
            notify(err.message);
        })
    
        db.collection("JobUnion").onSnapshot(snapshot => {
            setupTemplateforJobs(snapshot.docs);
        }, err => {
            notify(err.message);
        })
        
        db.collection('news').onSnapshot(snapshot => {
            setupTemplateforNews(snapshot.doc)

        }, err => {
            notify(err.message)
        });


        setupUI(user)

    } else {
        setupUI(user)
        //setupUI()
    }
})
export function logout() {
    return auth.signOut();
}

export function register(email, password, firstName, lastName, ) {
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
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
        db.collection('users').doc(cred.user.uid).get().then(doc => {
            let userData = {
                'firstName': doc.data().firstName,
                'lastName': doc.data().lastName,
                'email': doc.data().email,
            }
            setUserData(userData);
            updateInfo(userData)
            console.log(userData);

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
export function getUserInfo() {
    let auths = firebase.auth();

    return

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