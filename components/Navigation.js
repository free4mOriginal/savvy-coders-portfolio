const buildNavHTML = (stateLinks) => {
    let linksHTML = '';
    stateLinks.forEach((link) => linksHTML += `<a href="#" id="${link}">${link}</a><BR>`);
    return linksHTML;
};

export default (state) => `<nav class="flex flex--justify">
<figure id="portfolio">
    <p class="navTitles">Portfolio</p>
    <hr>
    <p>
        <a href="${state.images.tyro}" target="_blank">TyroDev Social SPA</a><BR>
        <a href="https://courselist.netlify.com/" target="_blank">Searchable Courselist</a><BR>
        <a href="https://karinaliner.netlify.com/" target="_blank">Capstone Project</a><BR>
        <a href="https://jammming.netlify.com/" target="_blank">Spotify API web app</a><BR>
        <a href="https://reaction-game-js.netlify.com/" target="_blank">JS Reaction Game</a><BR>
        <a href="http://www.free4m.com/" target="_blank">Fine Art & Design</a>
    </p>
</figure>

<figure id="contact">
    <p class="navTitles">Contact</p>
    <hr>
    <p> 3 2 3 . 4 8 1 . 2 9 2 3<BR>
    free4m @ gmail</p>
    <p id="links">
        ${buildNavHTML(state.links)}
    </p>
</figure>
</nav>`;
