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

export { squareTransitions30, galleryTransitions, profileTransitions };