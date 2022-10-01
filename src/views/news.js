
import {
    html
} from "../lib.js";





const newsTemplate = () => html `

`

export function newsView(ctx){
    ctx.render(newsTemplate());
    
    ctx.page.redirect('/newsView');
}