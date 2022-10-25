export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}


export function setHeader(ctx) {
    ctx.isAuth = sessionStorage.getItem('user') !== null;
    ctx.user = sessionStorage.getItem('user');
}
export function styleAllOptions(classSection, main) {
    let section = document.getElementsByClassName(classSection)

    for (let i = 0; i < section.length; i++) {
        section[i].classList.add(`option${main}${i}`)
    }
}


export function ticksFunction(page) {
    let ticks = document.getElementsByClassName('tickBox');
    let arrOfTicks = Array.from(ticks)
    arrOfTicks.forEach(x => {
        x.addEventListener('click', (e) => {

            e.target.classList.remove('tickBox')
            if (e.target.classList.contains('untickBox')) {
                e.target.classList.add('tickBox')
                e.target.classList.remove('untickBox')
            } else {
                e.target.classList.add('untickBox')
            }
            calculateProgress(page)
        })
    })

}
export function calculateProgress(page) {
    let progressBar = document.getElementById('progress-bar');
    let arrowNumber = document.getElementsByClassName('arrowNumber')[0];
    let fullClass = progressBar.querySelector('.full');
    let emptyClass = progressBar.querySelector('.empty');
    let ticks = document.getElementsByClassName('untickBox');
    let number = document.getElementById('number');

    let ticksCount = ticks.length;
    arrowNumber.style.left = '82%';
    let quantity = 100 / ticksCount;

    if (page == 'registerAsCitizen') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '70%'
            fullClass.style.width = '83%';
            emptyClass.style.width = '17%'
            number.textContent = '83%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '59%'
            fullClass.style.width = '65%';
            emptyClass.style.width = '34%'
            number.textContent = '65%'
        }
        if (ticksCount == 3) {
            arrowNumber.style.left = '48%';
            fullClass.style.width = '50%';
            emptyClass.style.width = '50%'
            number.textContent = '47%'
        }
        if (ticksCount == 4) {
            arrowNumber.style.left = '37%';
            fullClass.style.width = '34%';
            emptyClass.style.width = '65%'
            number.textContent = '30%'
        }
        if (ticksCount == 5) {
            arrowNumber.style.left = '25%';
            fullClass.style.width = '15%';
            emptyClass.style.width = '83%'
            number.textContent = '15%'
        }
        if (ticksCount == 6) {
            arrowNumber.style.left = '13%'
            fullClass.style.width = '0%';
            emptyClass.style.width = '100%'
            number.textContent = '0%'
        }
    } else if (page == 'bankMenuView') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '62%'
            fullClass.style.width = '71%';
            emptyClass.style.width = '29%'
            number.textContent = '65%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '39%'
            fullClass.style.width = '39%';
            emptyClass.style.width = '60%'
            number.textContent = '33%'
        }
        if (ticksCount == 3) {
            arrowNumber.style.left = '13%';
            fullClass.style.width = '0%';
            emptyClass.style.width = '100%'
            number.textContent = '0%'
        }
    }else if (page == 'digitalMenuView') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '62%'
            fullClass.style.width = '71%';
            emptyClass.style.width = '29%'
            number.textContent = '71%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '39%'
            fullClass.style.width = '39%';
            emptyClass.style.width = '60%'
            number.textContent = '35%'
        }
        if (ticksCount == 3) {
            arrowNumber.style.left = '13%';
            fullClass.style.width = '0%';
            emptyClass.style.width = '100%'
            number.textContent = '0%'
        }
    }else if (page == 'carMenuView') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '48%'
            fullClass.style.width = '50%';
            emptyClass.style.width = '50%'
            number.textContent = '500%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '13%';
            fullClass.style.width = '0%';
            emptyClass.style.width = '100%'
            number.textContent = '0%'
        }
    }else if (page == 'housingMenuView') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '65%'
            fullClass.style.width = '75%';
            emptyClass.style.width = '25%'
            number.textContent = '75%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '48%';
            fullClass.style.width = '50%';
            emptyClass.style.width = '50%'
            number.textContent = '50%'
        }
        if (ticksCount == 3) {
            arrowNumber.style.left = '30%';
            fullClass.style.width = '25%';
            emptyClass.style.width = '75%'
            number.textContent = '25%'
        }
        if (ticksCount == 4) {
            arrowNumber.style.left = '13%';
            fullClass.style.width = '0%';
            number.textContent = '0%'
            emptyClass.style.width = '100%'
        }
    }else if (page == 'jobsMenuView') {
        for (let i = 0; i < ticksCount; i++) {
            arrowNumber.style.left = arrowNumber.style.left - quantity + '%';
            fullClass.style.width = fullClass.style.width - quantity + '%';
            emptyClass.style.width = emptyClass.style.width - quantity + '%'
        }
        if (ticksCount == 0) {
            arrowNumber.style.left = '82%'
            fullClass.style.width = '100%';
            emptyClass.style.width = '0%'
            number.textContent = '100%'
        }
        if (ticksCount == 1) {
            arrowNumber.style.left = '68%'
            fullClass.style.width = '80%';
            number.textContent = '80%'
            emptyClass.style.width = '20%'
        }
        if (ticksCount == 2) {
            arrowNumber.style.left = '54%';
            fullClass.style.width = '60%';
            emptyClass.style.width = '40%'
            number.textContent = '60%'
        }
        if (ticksCount == 3) {
            arrowNumber.style.left = '41%';
            fullClass.style.width = '40%';
            emptyClass.style.width = '60%'
            number.textContent = '40%'
        }
        if (ticksCount == 4) {
            arrowNumber.style.left = '26%';
            fullClass.style.width = '20%';
            emptyClass.style.width = '80%'
            number.textContent = '20%'
        }if (ticksCount == 5) {
            arrowNumber.style.left = '13%';
            fullClass.style.width = '0%';
            number.textContent = '0%'
            emptyClass.style.width = '100%'
        }
    }
}
export function progresBar(page) {
    let progressBar = document.getElementById('progress-bar');
    progressBar.firstElementChild.classList.add(`fullFor${page}`);
    progressBar.lastElementChild.classList.add(`emptyFor${page}`);
    let arrowNumber = document.getElementsByClassName('arrowNumber')[0];
    arrowNumber.classList.add(`arrowNumberFor${page}`)

}
