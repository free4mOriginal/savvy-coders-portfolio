import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

import jammmingIMG from '../images/Jammming.png';
import reactionGame from '../images/react-game.png';
import portraits from '../images/Moroccan.jpg';
import profile from '../images/profile.jpg';

const root = document.querySelector('#root');

const squares = `<div id="squares">
                    <div id="goldSquare"></div>
                    <div id="tomatoSquare"></div>
                    <div id="blueSquare"></div>
                </div>`;

const subtitle = `<em>Web Developer <span style="color:tomato">|</span> Visual Artist</em>
                    <p style="margin-top: 30px">
                        <a href="https://www.linkedin.com/in/zhanaliner/" target="_blank"><i class="fab     fa-linkedin"></i></a> . . . <a href="https://github.com/free4mOriginal" target="_blank"><i class="fab fa-github"></i></a>
                    </p>`;

const state = {
    "home": {
        "title": "Zhana Liner",
        "subtitle": subtitle,
        "links": ['Message', 'Blog', 'Home'],
        "images": {
            "jammmingIMG": jammmingIMG,
            "reactionGame": reactionGame,
            "portraits": portraits,
        },
        "squares": squares,
    },
    "message": {
        "title": "Message Form",
        "links": ['Blog', 'Home'],
        "images": {
            "profile": profile,
        },
        "squares": squares,
    },
    "blog": {
        "title": "Blog",
        "links": ['Message', 'Home'],
        "images": {
        },
        "squares": squares,
    },
};

// Transitions methods:

const squareTransitions30 = () => {
    document.querySelector("#goldSquare").style.transform = "translateY(30px)";
    document.querySelector("#goldSquare").style.transition = "2.1s all ease";

    document.querySelector("#tomatoSquare").style.transform = "translateY(30px)";
    document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

    document.querySelector("#blueSquare").style.transform = "translateY(30px)";
    document.querySelector("#blueSquare").style.transition = "0.7s all ease";
};

const galleryTransitions = () => {
    document.querySelector('div.blog-flex').style.transform = "translateY(-40px)";
    document.querySelector('div.blog-flex').style.transition = "1.2s all ease";
};

const profileTransitions = () => {
    document.querySelector('#profile').style.transform = "translateY(60px)";
    document.querySelector('#profile').style.transition = "1.2s all ease";
};

// Render function:
function render(stateObj) {
    root.innerHTML = `
    ${Navigation(stateObj)}
    ${Header(stateObj)}
    ${Main(stateObj)}
    ${Footer(stateObj)}
    `;
}

// Contact Navigation Link methods:
const messageLink = () => {
    document.querySelector('h1').innerHTML = state.message.title;
    document.querySelector('main').innerHTML = `${Contact(state.message)}`;
    document.querySelector("#root").setAttribute('style', 'background: url("https://picsum.photos/id/160/3200/2119") no-repeat fixed; background-size: cover; background-position-y: bottom; background-position: center; min-height: 100vh;');
    setTimeout(squareTransitions30, 0);
    setTimeout(profileTransitions, 0);
};

const blogLink = () => {
    document.querySelector('h1').innerHTML = state.blog.title;
    document.querySelector('main').innerHTML = `${Blog(state.blog)}`;
    document.querySelector("#root").setAttribute('style', 'background: url("https://picsum.photos/id/173/1200/737") no-repeat fixed; background-size: cover; background-position: center; min-height: 100vh;');
    setTimeout(squareTransitions30, 0);
};

const homeLink = () => {
    document.querySelector('h1').innerHTML = state.home.title;
    document.querySelector('main').innerHTML = `${Main(state.home)}`;
    document.querySelector("#root").setAttribute('style', 'background: url("https://picsum.photos/id/415/5184/3456") no-repeat fixed; background-size: cover; background-position: center; min-height: 100vh;');
    setTimeout(squareTransitions30, 0);
    setTimeout(galleryTransitions, 0);
};

render(state.home);

setTimeout(squareTransitions30, 0);
setTimeout(galleryTransitions, 0);

document.querySelector("#Message").addEventListener('click', () => messageLink());
document.querySelector("#Blog").addEventListener('click', () => blogLink());
document.querySelector("#Home").addEventListener('click', () => homeLink());