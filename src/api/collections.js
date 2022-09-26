import { getAll } from "./api.js";

export async function getAllAsCitizen() {
    return getAll('registerAsCitizen')

}
/*
db.collection('users').doc(userData.uid).get().then( doc => {
    let userData = {
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        email: doc.data().email,
    };
    
    setUserData(userData)
    console.log(userData);
}) */