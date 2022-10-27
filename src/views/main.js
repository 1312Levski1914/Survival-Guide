
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
    <div class="listOfTaskImg" ></div>
    <div class="listOfTaskImgOpacity"></div>
    <section id="listOfTask">
        <div class="smallImg"></div>
        <section>
            <div class="wheel">
               <section >${taskOverall('Register as a citizen','0%','registerAsCitizen')}</section>
               <section >${taskOverall('Bank account Tax Card','0%','bankMenuView')}</section>
               <section >${taskOverall('Digital Services','0%','digitalMenuView')}</section>
               <section> ${taskOverall('Improve your car','0%','carMenuView')}</section>
               <section >  ${taskOverall('Housing','0%','housingMenuView')}</section>
               <section  >${taskOverall('Jobs | Unions','0%','jobsMenuView')}</section>
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
    <div class="makeMeWhite"></div>
    
</section>
`
const taskOverall= (title, progress,path) => html`
    <section class="infoRow">
        <div class="balloonProcent">
            <p class="balloonText">${progress}</p>
        </div>
        <a href="/${path}">${title}</a>
    </section>
`
export function mainView(ctx){
    let userData =getUserData()
    if(userData){
        ctx.render(mainTemplate(userData));

        let notificationBtn = document.getElementsByClassName('notifications')[0]
        let siteMap = document.getElementById('site-map');
        let newIcon = siteMap.querySelector('.newsPeaper')
        let profileImg = document.getElementById('navBar');
        let chatIcon = document.getElementsByClassName('chat')[0];
        chatIcon.addEventListener('click', () => {
            ctx.page.redirect('/chatView')
        })
        

        profileImg=  profileImg.querySelector('img');
        profileImg.addEventListener('click',() =>{
            
            ctx.page.redirect('/profileView')
        })

        newIcon.addEventListener('click',() => {
            ctx.page.redirect('/newsView');
        })
        notificationBtn.addEventListener('click', () => {
            ctx.page.redirect('/notificationView')
        })
        styleAllOptions('infoRow','Main')
        readData('citizenProgress')
        readData('bankMenuView')
        readData('digitalProgress');
        readData('carImprove')
        readData('housing')
        readData('jobs')
}
}

function readData(page){
    let ballonText = document.getElementsByClassName('balloonText');
    db.collection("users")
      .get()
      .then((data) => {
          data.docs.map((item) => {
              if(item.id == auth.currentUser.uid && item.data().citizenProgress !== undefined){
                if(page == 'citizenProgress'){
                  
                    ballonText[0].textContent = item.data().citizenProgress + '%'
                }else if(page == 'bankMenuView'){
                    if(item.data().bankProgress !== undefined){

                        ballonText[1].textContent = item.data().bankProgress + '%'
                    }
                }else if(page == 'digitalProgress'){
                    if(item.data().digitalProgress !== undefined){

                        ballonText[2].textContent = item.data().digitalProgress + '%'
                    }
                }else if(page == 'carImprove'){
                    if(item.data().carImprove !== undefined){

                        ballonText[3].textContent = item.data().carImprove + '%'
                    }
                }else if(page == 'housing'){
                    if(item.data().housing !== undefined){

                        ballonText[4].textContent = item.data().housing + '%'
                    }
                }else if(page == 'jobs'){
                    if(item.data().jobs !== undefined){

                        ballonText[5].textContent = item.data().jobs + '%'
                    }
                }
                
              }
            
          })
      });
  };