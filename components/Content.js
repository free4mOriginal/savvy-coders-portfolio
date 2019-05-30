import * as pages from "../pages";

// pages.nameOfPage(pass state argument which will correcpond to correct state in that will be passed to it from outside);

export default (state) => {
    document.querySelector('body > div').setAttribute('class', `${state.background}`);
    return `<main>
        ${pages[state.name](state)}
        </main>
    `;
};
