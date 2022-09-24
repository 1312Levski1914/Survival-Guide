import {
    html
} from "lit-html";

const homeTemplate = () => html `
<h2>Home</h2>
<p> Welcome to our site</p>
`;

export function showHome(ctx) {
    ctx.render(homeTemplate());
}
/*<section id="homeView">
            <h2>Home</h2>
            <p> Welcome to our site</p>
        </section> */