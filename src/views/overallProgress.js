import {
    html
} from "../lib.js";



const overallTemplate = () => html `
    <h1>Overall progress</h1>
    ${taskOverall('Register as a citizen','100%',"https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D189325796W8333H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/bil-maerkat-fuck-du-bil-tuning-bagrude-sticker.jpg")}
    ${taskOverall('Register as a citizen','100%',"https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D189325796W8333H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/bil-maerkat-fuck-du-bil-tuning-bagrude-sticker.jpg")}
`

const taskOverall= (title, progress, imgLine) => html`
        <p>${progress}</p>
    <div id="overalProgress">
        <a href="/registerAsCitizen">${title}</a>
        <div><img src="${imgLine}" alt="img "></div>
    </div>
`


export function overallView(ctx){
    ctx.render(overallTemplate());

}