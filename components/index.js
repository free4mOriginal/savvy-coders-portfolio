import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

import * as states from '../store';

const root = document.querySelector('body > div');

const caption = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((resJSON) => {
            for (let i = 0; i < 100; i++) {
                states.Blog.text.push(resJSON[Math.floor(Math.random() * 100)].body);
            }
        })
        .catch((error) => console.error(`Error! ${error}`));
};

caption();

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
