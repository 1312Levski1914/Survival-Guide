import { get } from "./data/api.js";

export function checkUserNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData != null){
        document.getElementById('greeting').textContent = `Welcome, ${userData.email}!`;
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display= 'none';
    }else{
        document.getElementById('guestNav').style.display = 'inline-block';
        document.getElementById('userNav').style.display= 'none';
    }
}

export function onLogout(ctx){
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    get('/api/users/logout',{
        'user-token': userData.objectId,
    });
    console.log(userData.objectId);
    sessionStorage.removeItem('userData');
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}

export function createSubmitHandler(form,callback){
    form.addEventListener('submit',onSubmit);

    function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(form);
        callback(Object.fromEntries([...formData.entries()]));
    }
}