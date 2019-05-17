import * as pages from "../pages";

// pages.nameOfPage(pass state argument which will correcpond to correct state in that will be passed to it from outside);

export default (state) => {
    const subtitle = () => {
        state.name === "Home" ? document.querySelector("#subtitle").setAttribute('style', 'display: visible') : document.querySelector('#subtitle').setAttribute('style', 'display: none');
    };

    const background = document.querySelector('body > div').setAttribute('class', `${state.background}`);
    
    return `<main>
    ${pages[state.name](state)}
    </main>
    <p id="setTimeoutSubtitle">${setTimeout(background, 0)}
    ${setTimeout(subtitle, 0)}</p>
    `;
};