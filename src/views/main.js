
import {
    html,
} from "../lib.js";
import { getUserData, styleAllOptions } from "../until.js";



const mainTemplate = (userData) => html `
<section id="main">
    <div id="navBar">
        <img src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/51545850_10214302658900386_1194998865414062080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=FitUoHOpATAAX8YPa1J&_nc_ht=scontent-cph2-1.xx&oh=00_AT9VATPIFddiOSgJMKWKufX3n7mG8mLlcvvASSiXnGklbQ&oe=635F372B">
        <p id="name">${userData.firstName} ${userData.lastName}</p>
        <section class= "nav-btn">
            <a></a>
            <a></a>
            <a></a>
        </section>
    </div>
    <section id="listOfTask">
        <div class="listOfTaskImg"></div>
        <div class="smallImg"></div>
        <section>
            <div class="wheel">
                ${overallTemplate()}
            </div>
        </section>
        <div class="chat"></div>
    </section>
    <section id="site-map">
        <div class="bottomNav">
            <div class="newsPeaper"></div>
            <div class="homeBackground">
                <div class="home"></div>
                <h1>Home</h1>
            </div>
            <div class="notifications"></div>
        </div>
    </section>
</section>
`
const overallTemplate = () => html `
    ${taskOverall('Register as a citizen','100%','registerAsCitizen')}
    ${taskOverall('Bank account Tax Card','50%','bankMenuView')}
    ${taskOverall('Digital Services','0%','digitalMenuView')}
    ${taskOverall('Improve your car','0%','carMenuView')}
    ${taskOverall('Housing','50%','housingMenuView')}
    ${taskOverall('Jobs | Unions','50%','jobsMenuView')}

`
const taskOverall= (title, progress,path) => html`
    <section class="infoRow">
        <div class="balloonProcent">
            <p>${progress}</p>
        </div>
        <a href="/${path}">${title}</a>
    </section>
`
export function mainView(ctx){
    let userData =getUserData()
    console.log(userData);
    
   
    ctx.render(mainTemplate(userData));

    let siteMap = document.getElementById('site-map');
    let newIcon = siteMap.querySelector('.newsPeaper')
    let profileImg = document.getElementById('navBar');
    profileImg=  profileImg.querySelector('img');
    profileImg.addEventListener('click',() =>{
        ctx.page.redirect('/profileView')
    })
    
    newIcon.addEventListener('click',() => {
        ctx.page.redirect('/newsView');
    })
    styleAllOptions('infoRow','Main')

   


    
}

