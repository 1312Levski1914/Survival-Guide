import page from '../../node_modules/page/page.mjs';
import {
    render as litRender
} from '../node_modules/lit-html/lit-html.js';
import {
    showAbout
} from "./views/about.js";
import {
    showHome
} from "./views/home.js";
import {
    showCatalog
} from "./views/catalog.js";
import {
    showLogin
} from "./views/login.js";
/*
import { showDetails } from './view/details.js';
import { showCreate} from "./views/create.js";
import { showRegister } from "./views/register.js";
import {checkUserNav,onLogout } from "./utl.js";


page('/catalog/:productId', showDetails);
*/
const main = document.querySelector('main');
page(decorateContext);
page('./index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/about', showAbout);
page('/login', showLogin);
page('*', notFound);

page.start();

function render(templateResult) {
    litRender(templateResult, main);
}

function decorateContext(ctx, next) {
    ctx.render = render;
    next();
}

function notFound(ctx) {
    ctx.render('404 Not Found');
}
/*
document.querySelector('nav').addEventListener('click', onNavigate);
console.log(page);
const sections = {
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'loginBtn': showLogin,
    'registerBtn': showRegister,
    "createBtn": showCreate,
    'logoutBtn': onLogout,
}
checkUserNav();
goTo('homeBtn');

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const viewName = event.target.id;

        if (goTo(viewName)) {
            event.preventDefault();
        }
    }
}

function goTo(viewName) {
    const view = sections[viewName];

    if (typeof view == 'function') {
        view({
            render,
            goTo,
            checkUserNav,
        })
        return true;
    } else {
        return false;
    }
}
*/