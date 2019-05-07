export default function Navigation() {
    return `<nav class="flex flex--justify">
<div id="squares">
    <div id="goldSquare"></div>
    <div id="tomatoSquare"></div>
    <div id="blueSquare"></div>
</div>

<figure id="portfolio">
    <p class="navTitles">Portfolio</p>
    <p>
        <a href="class.html" target="_blank">Class Showcase</a><BR>
        <a href="web-store.html" target="_blank">Hack-a-thon</a><BR>
        <a href="demo.html" target="_blank">Demo Day</a><BR>
        <a href="https://jammming.netlify.com/" target="_blank">Spotify API web app</a><BR>
        <a href="https://reaction-game-js.netlify.com/" target="_blank">JS Reaction Game</a><BR>
        <a href="http://www.free4m.com" target="_blank">Fine Art & Design</a>
    </p>
</figure>

<figure id="contact">
    <p class="navTitles">Contact</p>
    <hr>
    <p><a href="mailto:free4m@gmail.com">free4m @ gmail</a><BR>
        323.481.2923<BR>
        <p>
            <a href="contact-form/contact-form.html">Message form</a><BR>
            <a href="blog/blog.html">Blog</a>
        </p>
    </p>
</figure>
</nav>`;
}