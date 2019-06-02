import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

import * as states from '../store';

const root = document.querySelector('body > div');

const caption = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error('Bad request'));
            }
            return response.json();
        })
        .then((resJSON) => {
            for (let i = 0; i < 100; i++) {
                states.Blog.text.push(resJSON[Math.floor(Math.random() * 100)].body);
            }
        })
        .catch((error) => console.error(`Error! ${error}`))
        .finally(() => console.log('finished random caption fetch request'));
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
