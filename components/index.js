import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

import * as states from '../store';

const root = document.querySelector('body > div');

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