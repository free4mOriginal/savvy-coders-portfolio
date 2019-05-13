import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

import jammmingIMG from '../images/Jammming.png';
import reactionGame from '../images/react-game.png';
import portraits from '../images/Moroccan.jpg';

const root = document.querySelector('#root');

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
    "contact": {
        "contactHeader": `<h1>Message Form</h1>`,
    },
    "blog": {
        "blogHeader": `<h1>Blog</h1>`,
    },
    "linkedIn": `<p>
    <a href="https://www.linkedin.com/in/zhanaliner/" target="_blank"><i class="fab fa-linkedin"></i></a> . .
    .
    <a href="https://github.com/free4mOriginal" target="_blank"><i class="fab fa-github"></i></a>
    </p>`,

    // Transitions functions:
    squareTransitions() {
        document.querySelector("#goldSquare").style.transform = "translateY(20px)";
        document.querySelector("#goldSquare").style.transition = "2.1s all ease";

        document.querySelector("#tomatoSquare").style.transform = "translateY(20px)";
        document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

        document.querySelector("#blueSquare").style.transform = "translateY(20px)";
        document.querySelector("#blueSquare").style.transition = "0.7s all ease";
    },
    squareTransitions40() {
        document.querySelector("#goldSquare").style.transform = "translateY(40px)";
        document.querySelector("#goldSquare").style.transition = "2.1s all ease";

        document.querySelector("#tomatoSquare").style.transform = "translateY(40px)";
        document.querySelector("#tomatoSquare").style.transition = "1.4s all ease";

        document.querySelector("#blueSquare").style.transform = "translateY(40px)";
        document.querySelector("#blueSquare").style.transition = "0.7s all ease";
    },
    galleryTransitions() {
        document.querySelector('div.blog-flex').style.transform = "translateY(-40px)";
        document.querySelector('div.blog-flex').style.transition = "1.2s all ease";
    },
    profileTransitions() {
        document.querySelector('#profile').style.transform = "translateY(60px)";
        document.querySelector('#profile').style.transition = "1.2s all ease";
    },
};

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
        document.querySelector('header').innerHTML = state.contact.contactHeader;
        document.querySelector('#about').innerHTML = "";
        document.querySelector('main').innerHTML = `${Contact(state)}`;
        document.querySelector('div').setAttribute('style', 'background: url("https://picsum.photos/id/160/3200/2119") no-repeat fixed; background-size: cover; background-position-y: bottom; background-position: center;');
        document.querySelector('div').setAttribute('class', 'contact-form');
        document.querySelector('#links').innerHTML = `
            ${state.links.gmail}
            ${state.links.blog}
            ${state.links.home}
            ${state.linkedIn}`;
        setTimeout(state.squareTransitions40, 0);
        setTimeout(state.profileTransitions, 0);
    } else if (link === 'Blog') {
        document.querySelector('header').innerHTML = state.blog.blogHeader;
        document.querySelector('#about').innerHTML = "";
        document.querySelector('main').innerHTML = `${Blog(state)}`;
        document.querySelector('div').setAttribute('style', 'background: url("https://picsum.photos/id/173/1200/737") no-repeat fixed; background-size: cover; background-position: center;');
        document.querySelector('#links').innerHTML = `
            ${state.links.gmail}
            ${state.links.form}
            ${state.links.home}
            ${state.linkedIn}`;
        setTimeout(state.squareTransitions40, 0);
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

setTimeout(state.squareTransitions, 0);
setTimeout(state.galleryTransitions, 0);