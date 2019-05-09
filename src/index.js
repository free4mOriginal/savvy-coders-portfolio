import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import jammmingIMG from '../images/Jammming.png';
import reactionGame from '../images/react-game.png';
import portraits from '../images/Moroccan.jpg';

const state = {
    "index": {
        "title": "Zhana Liner",
        "images": {
            "jammmingIMG": jammmingIMG,
            "reactionGame": reactionGame,
            "portraits": portraits,
        }
    },
    "contact": {
        "title": "Contact",
        "images": {
            "jammmingIMG": jammmingIMG,
            "reactionGame": reactionGame,
            "portraits": portraits,
        }
    },
    "blog": {
        "title": "Blog",
        "images": {
            "jammmingIMG": jammmingIMG,
            "reactionGame": reactionGame,
            "portraits": portraits,
        }
    },
};

const root = document.querySelector('#root');

function render(stateObj) {
    root.innerHTML = `
    ${Navigation(stateObj)}
    ${Header(stateObj)}
    ${Main(stateObj)}
    ${Footer(stateObj)}
    `;
}

render(state.index);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        render(state[`${e.target.textContent.toLowerCase()}`]);
    });
});

// Squares transitions function:

function transitions() {
    document.getElementById("goldSquare").style.transform = "translateY(30px)";
    document.getElementById("goldSquare").style.transition = "2.1s all ease";

    document.getElementById("tomatoSquare").style.transform = "translateY(30px)";
    document.getElementById("tomatoSquare").style.transition = "1.4s all ease";

    document.getElementById("blueSquare").style.transform = "translateY(30px)";
    document.getElementById("blueSquare").style.transition = "0.7s all ease";

    document.querySelector('div.blog-flex').style.transform = "translateY(-100px)";
    document.querySelector('div.blog-flex').style.transition = "1.2s all ease";
}

setTimeout(transitions, 0);