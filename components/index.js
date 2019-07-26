import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

// This is needed for async/await operations for parcel:
import "@babel/polyfill";

// Object Destructuring
import { capitalize } from 'lodash';

import * as states from '../store';

// capitalize 'Navigo' to make it clear that this is a CONSTRUCTOR FXN.
import Navigo from 'navigo';

// 'axios' is NOT  fxn. constructor - no need to instantiate with 'new'
import axios from 'axios';

// origin is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

const root = document.querySelector('body > div');

// function caption() {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.data[Math.floor(Math.random() * 100)].body)
//         .catch((error) => console.error(`Error! ${error}`))
//         .finally(() => console.log('finished random caption fetch request'));
// }

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        for (let i = 0; i < 100; i++) {
            states.Blog.text.push(response.data[Math.floor(Math.random() * 100)].body);
        }})
    .catch((error) => console.error(`Error! ${error}`));

function render(state) {
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

    const links = document.querySelectorAll('#links a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const name = e.target.textContent;
            render(states[name]);
        });
    });

    router.updatePageLinks();
}

render(states.Home);

// Check the URL bar
// Grab anything that is beyond window.location.origin (e.g. /about)
// Assign that to an Object called params with 🔑 of path.
// Use the 'capitalize' method from lodash that we imported to transform, for example 'about' to 'About'
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();