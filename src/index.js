import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

//This is a GETTER;

// let initialHTML = document.body.innerHTML;

// This is a SETTER;
document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${Main}
    ${Footer}
    `;

// ${initialHTML}
