import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import jammmingIMG from '../images/Jammming.png';
import reactionGame from '../images/react-game.png';
import portraits from '../images/Moroccan.jpg';

const state = {
    "title": "Zhana Liner",
    "links": {
        "gmail": `<a href="#">free4m @ gmail</a></BR>`,
        "form": `<a href="#">Message form</a></BR>`,
        "blog": `<a href="#">Blog</a><BR>`,
        "home": `<a href="#">Home</a>`
    },
    "images": {
        "jammmingIMG": jammmingIMG,
        "reactionGame": reactionGame,
        "portraits": portraits,
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

render(state);

const linkCheck = (link) => {
    if (link === 'free4m @ gmail') {
        document.querySelector('h1').innerHTML = "Email";
    } else if (link === 'Message form') {
        document.querySelector('h1').innerHTML = "Message form";
        document.querySelector('#root').setAttribute('style', 'background: url("https://picsum.photos/id/160/3200/2119") no-repeat fixed;    background-size: cover; background-position-y: bottom; background-position: center;');
        document.querySelector('main').innerHTML = `${Contact}`;
    } else if (link === 'Blog') {
        document.querySelector('h1').innerHTML = "Blog";
    } else if (link === 'Home') {
        document.querySelector('h1').innerHTML = "Home";
    }
};

document.querySelectorAll('#contact a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        linkCheck(e.target.textContent);
    });
});

// Squares transitions function:

function transitions() {
    document.querySelector("#goldSquare").style.transform = "translateY(30px)";
    document.querySelector("#goldSquare").style.transition = "2.1s all ease";

    document.querySelector("#tomatoSquare").style.transform = "translateY(30px)";
    document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

    document.querySelector("#blueSquare").style.transform = "translateY(30px)";
    document.querySelector("#blueSquare").style.transition = "0.7s all ease";

    document.querySelector('div.blog-flex').style.transform = "translateY(-100px)";
    document.querySelector('div.blog-flex').style.transition = "1.2s all ease";
}

setTimeout(transitions, 0);