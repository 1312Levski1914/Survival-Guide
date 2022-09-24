export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data){
    sessionStorage.setItem('userData',JSON.stringify(data))
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
}   
export function saveUserInfo(userInfo){
    sessionStorage.setItem('user',userInfo);
}

export function setHeader(ctx){
    ctx.isAuth = sessionStorage.getItem('user') !== null;
    ctx.user = sessionStorage.getItem('user');
}