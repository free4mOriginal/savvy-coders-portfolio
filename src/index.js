import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Message from "../components/Message";
import Footer from "../components/Footer";

import * as state from '../store';

import { squareTransitions30, galleryTransitions, profileTransitions } from '../components/Transitions';

const root = document.querySelector('body > div');

// Render function:
function render(stateObj) {
    root.innerHTML = `
    ${Navigation(stateObj)}
    ${Header(stateObj)}
    <main>${Home(stateObj)}</main>
    ${Footer(stateObj)}
    `;

    const links = document.querySelectorAll('#links a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const namedObject = state[`${e.target.textContent}`];
            const name = e.target.textContent;
            console.log(name);
            render(namedObject);
            document.querySelector('body > div').setAttribute('class', `${namedObject.background}`);
            if (name === 'Home') {
                document.querySelector('main').innerHTML = `${Home(state.Home)}`;
                document.querySelector('#subtitle').setAttribute('style', 'display: visible');
                setTimeout(squareTransitions30, 0);
                setTimeout(galleryTransitions, 0);
            } else if (name === 'Blog') {
                document.querySelector('main').innerHTML = `${Blog(state.Blog)}`;
                document.querySelector('#subtitle').setAttribute('style', 'display: none');
                setTimeout(squareTransitions30, 0);
            } else {
                document.querySelector('Main').innerHTML = `${Message(state.Message)}`;
                document.querySelector('#subtitle').setAttribute('style', 'display: none');
                setTimeout(squareTransitions30, 0);
                setTimeout(profileTransitions, 0);
            }
        });
    });
};

render(state.Home);

setTimeout(squareTransitions30, 0);
setTimeout(galleryTransitions, 0);