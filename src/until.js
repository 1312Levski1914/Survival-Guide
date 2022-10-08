export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data){
    sessionStorage.setItem('userData',JSON.stringify(data))
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
}   


export function setHeader(ctx){
    ctx.isAuth = sessionStorage.getItem('user') !== null;
    ctx.user = sessionStorage.getItem('user');
}
export function styleAllOptions(classSection,main){
    let section = document.getElementsByClassName(classSection)
    
    for(let i = 0 ; i < section.length ; i++){
        section[i].classList.add(`option${main}${i}`)
    }
}