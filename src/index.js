import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import jammmingIMG from '../images/Jammming.png';
import reactionGame from '../images/react-game.png';
import portraits from '../images/Moroccan.jpg';

const state = {
    "title": "Zhana Liner",
    "images": {
        "jammmingIMG": jammmingIMG,
        "reactionGame": reactionGame,
        "portraits": portraits,
    }
};

console.log(state);


// This is a SETTER;
document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

// ${initialHTML}
