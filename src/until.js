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
    

export function ticksFunction(){
    let ticks = document.getElementsByClassName('tickBox');
    let arrOfTicks = Array.from(ticks)
    arrOfTicks.forEach(x => {
        x.addEventListener('click',(e) =>{
            
            e.target.classList.remove('tickBox')
            if(e.target.classList.contains('untickBox')){
                e.target.classList.add('tickBox')
                e.target.classList.remove('untickBox')
            }else{
                e.target.classList.add('untickBox')
            }
            calculateProgress()
        })
    })

}
export function calculateProgress(){
    let progressBar = document.getElementById('progress-bar');
    let arrowNumber = document.getElementsByClassName('arrowNumber')[0];
    let fullClass = progressBar.querySelector('.full');
    let emptyClass = progressBar.querySelector('.empty');
    let ticks = document.getElementsByClassName('untickBox');
    let ticksCount = ticks.length;
    arrowNumber.style.left = '82%';
    let quantity = 100 / ticksCount;

    for(let i = 0 ; i < ticksCount ; i++){
        arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
        fullClass.style.width = fullClass.style.width - quantity +'%';
        emptyClass.style.width = emptyClass.style.width - quantity + '%'
    }
    if(ticksCount == 0){
        arrowNumber.style.left = '82%'
        fullClass.style.width = '100%';
        emptyClass.style.width = '0%'
    }
    if(ticksCount == 1){
        arrowNumber.style.left = '70%'
        fullClass.style.width = '83%';
        emptyClass.style.width = '17%'
    } 
    if(ticksCount == 2){
        arrowNumber.style.left = '59%'
        fullClass.style.width = '65%';
        emptyClass.style.width = '34%'
    }
    if(ticksCount == 3){
        arrowNumber.style.left = '48%';
        fullClass.style.width = '50%';
        emptyClass.style.width = '50%'
    }
    if(ticksCount == 4){
        arrowNumber.style.left = '37%';
        fullClass.style.width = '34%';
        emptyClass.style.width = '65%'
    }
    if(ticksCount == 5){
        arrowNumber.style.left = '25%';
        fullClass.style.width = '15%';
        emptyClass.style.width = '83%'
    }
    if(ticksCount == 6){
        arrowNumber.style.left = '13%'
        fullClass.style.width = '0%';
        emptyClass.style.width = '100%'
    }
    
}
export function progresBar(page){
    let progressBar = document.getElementById('progress-bar');
    progressBar.firstElementChild.classList.add(`fullFor${page}`);
    progressBar.lastElementChild.classList.add(`emptyFor${page}`);
    let arrowNumber = document.getElementsByClassName('arrowNumber')[0];
    arrowNumber.classList.add(`arrowNumberFor${page}`)
    
}