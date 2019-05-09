export default (state) => `<nav class="flex flex--justify">
<div id="squares">
    <div id="goldSquare"></div>
    <div id="tomatoSquare"></div>
    <div id="blueSquare"></div>
</div>

<figure id="portfolio">
    <p class="navTitles">Portfolio</p>
    <hr>
    <p>
        <a href="http://www.karinaliner.com" target="_blank">Capstone Project</a><BR>
        <a href="https://jammming.netlify.com/" target="_blank">Spotify API web app</a><BR>
        <a href="https://reaction-game-js.netlify.com/" target="_blank">JS Reaction Game</a><BR>
        <a href="http://www.free4m.com" target="_blank">Fine Art & Design</a>
    </p>
</figure>

<figure id="contact">
    <p class="navTitles">Contact</p>
    <hr>
    <p> 3 2 3 . 4 8 1 . 2 9 2 3<BR>
    ${state.links.gmail}
    ${state.links.form}
    ${state.links.blog}
    </p>
</figure>
</nav>`;