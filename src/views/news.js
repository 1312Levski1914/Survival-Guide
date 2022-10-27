
import {
    html
} from "../lib.js";
import { setUserData } from "../until.js";

const arrayofPics = ['https://drive.google.com/file/d/1v7R4m06yBG2Dh9OK8UOCIq6pPbEUPWYF/view?usp=sharing','https://drive.google.com/file/d/1gMuRcInCBybdql0pUYLc_59gHLRkT3Qc/view?usp=sharing','https://drive.google.com/file/d/1_R-mKGUpSi8jMoZcr--Z_jhNnVDfD_lO/view?usp=sharing']
export const setupTemplateforNews = (picnumber, h1,p,p1,p2) => html `
    <section>
        <div class="newsListImg newsListImg${picnumber}">
            <div></div>
            <h1>${h1}</h1>
        </div>
        <div class="paragraphs${picnumber}">
            <p>${p}</p>
            <p>${p1}</p>
            <p>${p2}</p>
        </div>
        <div class="dots dots${picnumber}">
            <div><div></div></div>
            <div><div></div></div>
            <div><div></div></div>
        </div>
    </section>
`
let climate = '';
let meetDanes = '';
let cultureShock = '';
let meetDanesDot2 = '';
let meetDanesDot3 = '';
let cultureDot3 = '';
let cultureDot2 = '';
let climateDot2 = '';


db.collection('news').doc('meetDanes').get().then(doc => {
        climate = doc.data().climate;
        meetDanes = doc.data().meetDanes1;
        cultureShock = doc.data().cultureShock;
        meetDanesDot2 = doc.data().meetDanesDot2;
        meetDanesDot3 = doc.data().meetDanesDot3;
        cultureDot3 = doc.data().cultureDot3;
        cultureDot2 = doc.data().cultureDot2;
        climateDot2= doc.data().climateDot2;

})

const newsTemplate = (climate,meetDanes,cultureShock) => html `
    <section id="news">
    <section id="header">
        <video src="./images/Sunset.mp4" autoplay loop></video>
        <h1>LIFE IN DENMARK</h1>
    </section>
    <section id="listOfNews">
        ${setupTemplateforNews(1,'Meeting The Danes',meetDanes,meetDanesDot2,meetDanesDot3)}
        ${setupTemplateforNews(2,'Culture Shock',cultureShock,cultureDot2,cultureDot3)}
        ${setupTemplateforNews(3,'Climate',climate,climateDot2)}
       

    </section>
    <section id="footer">
        <div></div>
        <section></section>

    </section>
    </section>
`

export function newsView(ctx){
    ctx.render(newsTemplate(climate,meetDanes,cultureShock));
    
    let footer = document.getElementById('footer');
    let homeBtn = footer.querySelector('div');
    homeBtn.addEventListener('click', () => {
        ctx.page.redirect('/mainView');
    })

    let icon = footer.querySelector('section');
    icon.addEventListener('click', () => {
        ctx.page.redirect('/notificationView')
    })
    interactiveInfo('paragraphs1','dots1','#2C3C3A','#fff');
    interactiveInfo('paragraphs2','dots2','#2C3C3A','#fff');
    interactiveInfo('paragraphs3','dots3','#2C3C3A','#fff','Stop');
 
}

function interactiveInfo(paragraphName,dotsName,col1,col2,stoper){
    let dots = document.getElementsByClassName(dotsName);
    let meetDaness = document.getElementsByClassName(paragraphName)[0];
    let firstParagraph = meetDaness.firstElementChild;
    let secondParagraph = meetDaness.firstElementChild.nextElementSibling;
    secondParagraph.style.display = 'none';
    let thirthParagraph = meetDaness.lastElementChild;
    thirthParagraph.style.display = 'none';
    let meetDanesDot = dots[0];
    meetDanesDot.firstElementChild.firstElementChild.style.backgroundColor = col1;
    if(stoper){
        meetDanesDot.lastElementChild.style.display= 'none';
        firstParagraph.addEventListener('click', () => {
            firstParagraph.style.display = 'none';
            secondParagraph.style.display = '';
            meetDanesDot.firstElementChild.firstElementChild.style.backgroundColor = col2;
            meetDanesDot.firstElementChild.nextElementSibling.firstElementChild.style.backgroundColor = col1;
        })
        secondParagraph.addEventListener('click', () => {
            secondParagraph.style.display = 'none';
            firstParagraph.style.display = '';
            meetDanesDot.firstElementChild.nextElementSibling.firstElementChild.style.backgroundColor = col2;
            meetDanesDot.firstElementChild.firstElementChild.style.backgroundColor = col1;
        })
    }else{
        firstParagraph.addEventListener('click', () => {
            firstParagraph.style.display = 'none';
            secondParagraph.style.display = '';
            meetDanesDot.firstElementChild.firstElementChild.style.backgroundColor = col2;
            meetDanesDot.firstElementChild.nextElementSibling.firstElementChild.style.backgroundColor = col1;
        })
        secondParagraph.addEventListener('click', () => {
            secondParagraph.style.display = 'none';
            thirthParagraph.style.display = '';
            meetDanesDot.firstElementChild.nextElementSibling.firstElementChild.style.backgroundColor = col2;
            meetDanesDot.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.style.backgroundColor = col1;
        })
        thirthParagraph.addEventListener('click', () => {
            thirthParagraph.style.display = 'none';
            firstParagraph.style.display = '';
            meetDanesDot.firstElementChild.firstElementChild.style.backgroundColor = col1;
            meetDanesDot.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.style.backgroundColor = col2;
        })
    }
   
}
