
import {
    html
} from "../lib.js";


export function chatView(ctx) {
    ctx.render(chatTemplate());
    let firstName = document.getElementById('firstName') ;
    let lastName = document.getElementById('lastName')

    db.collection("users")
      .get()
      .then((data) => {
        
          data.docs.map((item) => {
            if(item.id == auth.currentUser.uid && item.data().firstName !== undefined){
                firstName.textContent = item.data().firstName;
                lastName.textContent = item.data().lastName;
                
            }
          })
         
      });
     
    

    const backArrow = document.getElementById('chatView').querySelector('i').addEventListener('click', () => {

        ctx.page.redirect('/mainView')
    })



}

const chatTemplate = () => html `
    <section id="chatView">

        <nav>
            <section id="names">
                <i class="gg-arrow-left backArrow backArrowForChat"></i>
                <h3 id="firstName"></h3>
                <h3 id="lastName"></h3>
            </section>
        </nav>
        <div id="brownCircle"></div>
        <div id="blueCircle"></div>
        
    </section>
`
