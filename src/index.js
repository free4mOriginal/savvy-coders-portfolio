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

const state = {
    "title": "Zhana Liner",
    "links": {
        "gmail": `<a href="#" id="emailLink">free4m @ gmail</a></BR>`,
        "form": `<a href="#" id="messageLink">Message form</a></BR>`,
        "blog": `<a href="#" id="blogLink">Blog</a><BR>`,
        "home": `<a href="#" id="homeLink">Home</a>`
    },
    "images": {
        "jammmingIMG": jammmingIMG,
        "reactionGame": reactionGame,
        "portraits": portraits,
        "profile": profile,
    },
    "contact": {
        "header": `<h1>Message Form</h1>`,
    },
    "blog": {
        "header": `<h1>Blog</h1>`,
    },
    "linkedIn": `<p><a href="https://www.linkedin.com/in/zhanaliner/" target="_blank"><i class="fab fa-linkedin"></i></a> . . . <a href="https://github.com/free4mOriginal" target="_blank"><i class="fab fa-github"></i></a></p>`,
};

// Transitions methods:
const squareTransitions = () => {
    document.querySelector("#goldSquare").style.transform = "translateY(20px)";
    document.querySelector("#goldSquare").style.transition = "2.1s all ease";

    document.querySelector("#tomatoSquare").style.transform = "translateY(20px)";
    document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

    document.querySelector("#blueSquare").style.transform = "translateY(20px)";
    document.querySelector("#blueSquare").style.transition = "0.7s all ease";
};

const squareTransitions40 = () => {
    document.querySelector("#goldSquare").style.transform = "translateY(40px)";
    document.querySelector("#goldSquare").style.transition = "2.1s all ease";

    document.querySelector("#tomatoSquare").style.transform = "translateY(40px)";
    document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

    document.querySelector("#blueSquare").style.transform = "translateY(40px)";
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

// Contact Navigation Link methods:
const emailLink = () => {
    document.querySelector('h1').innerHTML = "Email";
};

const messageLink = () => {
    document.querySelector('header').innerHTML = state.contact.header;
    document.querySelector('main').innerHTML = `${Contact(state)}`;
    document.querySelector('div').setAttribute('style', 'background: url("https://picsum.photos/id/160/3200/2119") no-repeat fixed; background-size: cover; background-position-y: bottom; background-position: center;');
    document.querySelector('div').setAttribute('class', 'contact-form');
    setTimeout(squareTransitions40, 0);
    setTimeout(profileTransitions, 0);
};

const blogLink = () => {
    document.querySelector('header').innerHTML = state.blog.header;
    document.querySelector('main').innerHTML = `${Blog(state)}`;
    document.querySelector('div').setAttribute('style', 'background: url("https://picsum.photos/id/173/1200/737") no-repeat fixed; background-size: cover; background-position: center;');
    setTimeout(squareTransitions40, 0);
};

const homeLink = () => {
    document.querySelector('h1').innerHTML = "Home";
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

render(state);

document.querySelector("#emailLink").addEventListener('click', () => emailLink());
document.querySelector("#messageLink").addEventListener('click', () => messageLink());
document.querySelector("#blogLink").addEventListener('click', () => blogLink());
document.querySelector("#homeLink").addEventListener('click', () => homeLink());


// document.querySelectorAll('#contact a').forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         let l = e.target.textContent;
//         if (l === 'free4m @ gmail') {
//             return state.emailLink();
//         } else if (l === 'Message form') {
//             return state.messageLink();
//         } else if (l === 'Blog') {
//             return state.blogLink();
//         } else if (l === 'Home') {
//             return state.homeLink();
//         }
//     });
// });

setTimeout(squareTransitions, 0);
setTimeout(galleryTransitions, 0);