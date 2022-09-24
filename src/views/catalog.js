import {html} from '../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../node_modules/lit-html/directive/repeat.js';
import { getAllRecipes } from '../data/recipes.js';

const catalogTemplate = (recipes) => html `
<2>Catalog</2>
<ul>
    ${repeat(recipes,r=> r._id, recipeCard)}
</ul>
`;

const recipeCard = (recipe) => html` <li><a href="/catalog/${recipe._id}">${recipe.name}</a></li>`;

export async function showCatalog(ctx){
    ctx.render(catalogTemplate([]));
    const recipes =await getAllRecipes();
    ctx.render(catalogTemplate(recipes))
}


/*

import { get } from "../data/api.js";

const section = document.getElementById('catalogView');
const list = section.querySelector('ul');
section.remove();

export async function showCatalog(ctx){
    ctx.render(section);

    list.replaceChildren('Loading...')
    
    const movies = await get('/api/data/article');

    const fragment =document.createDocumentFragment();

    movies.map(createMovieItem).forEach(c => fragment.appendChild(c));


    list.replaceChildren(fragment);
    
}

function createMovieItem(movie){
    const li = document.createElement('li');
    li.textContent = movie.title;

    return li
}

 */