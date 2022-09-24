import {
    post
} from "../data/api.js";

import {
    createSubmitHandler
} from "../utl.js";

const section = document.getElementById('loginView');
const form = section.querySelector('form');
createSubmitHandler(form,onSubmit);
section.remove();

let ctx = null;
export function showLogin(inctx) {
    ctx = inctx;
    ctx.render(section)
}

async function onSubmit({email,password}) {
    const data = await post('/api/users/login', {
        'login': email,
        password,
    });

    const userData = {
        email: data.email,
        accessToken: data.accessToken,
        id: data._id,
        'objectId': data.objectId,
    }
    console.log(userData.objectId);
    sessionStorage.setItem('userData', JSON.stringify(userData));
    ctx.checkUserNav();
    
    ctx.goTo('homeBtn')
}