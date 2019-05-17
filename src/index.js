import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Content from "../components/Content";
import Footer from "../components/Footer";

import { squareTransitions30 } from "../components/Transitions";

import * as states from '../store';

const root = document.querySelector('body > div');

// Render function:
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
            // squareTransitions30();
        });
    });
};

render(states.Home);