import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

// This is needed for async/await operations for parcel:
import "@babel/polyfill";

import * as states from '../store';

const root = document.querySelector('body > div');

const axios = require('axios');

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
};

render(states.Home);
