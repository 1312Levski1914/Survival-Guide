
import {
    html
} from "../lib.js";
import { setUserData } from "../until.js";

const arrayofPics = ['https://drive.google.com/file/d/1v7R4m06yBG2Dh9OK8UOCIq6pPbEUPWYF/view?usp=sharing','https://drive.google.com/file/d/1gMuRcInCBybdql0pUYLc_59gHLRkT3Qc/view?usp=sharing','https://drive.google.com/file/d/1_R-mKGUpSi8jMoZcr--Z_jhNnVDfD_lO/view?usp=sharing']
export const setupTemplateforNews = (picnumber, h1,p) => html `
    <section>
    <div class="newsListImg${picnumber}">
        <div></div>
        <h1>${h1}</h1>
    </div>
    <p>${p}</p>
    <section id="dots">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
    </section>
    </section>
`
let climate = '';
let meetDanes = '';
let cultureShock = '';

db.collection('news').doc('meetDanes').get().then(doc => {
        climate = doc.data().climate;
        meetDanes = doc.data().meetDanes;
        cultureShock = doc.data().cultureShock;        

})

const newsTemplate = (climate,meetDanes,cultureShock) => html `
    <section id="header">
        <video src="$1"></video>
        <h1>LIFE IN DENMARK</h1>
    </section>
    <section id="listOfNews">
        ${setupTemplateforNews(1,'Meeting The Danes',meetDanes)}
        ${setupTemplateforNews(2,'Culture Shock',cultureShock)}
        ${setupTemplateforNews(3,'Climate',climate)}
       

    </section>
    <section id="footer">
        <div></div>
    </section>
`

export function newsView(ctx){
    ctx.render(newsTemplate(climate,meetDanes,cultureShock));
    
    let footer = document.getElementById('footer');
    let homeBtn = footer.querySelector('div');
    homeBtn.addEventListener('click', () => {
        ctx.page.redirect('/mainView');
    })

 
}