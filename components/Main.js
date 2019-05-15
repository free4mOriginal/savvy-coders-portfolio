export default (state) => `<main>

${state.squares}

<div class="container">

    <div class="blog-flex">
            <figure>
                <a href="https://jammming.netlify.com/" target="_blank">
                <img src="${state.images.jammmingIMG}"
                        alt="Spotify API web app"></a>
                <figcaption>Jammming web app<BR>Spotify
                    API, React, JS</figcaption>
            </figure>
            <figure>
                <a href="https://reaction-game-js.netlify.com/" target="_blank"><img
                        src="${state.images.reactionGame}" alt="JavaScript Reaction Game"></a>
                <figcaption>JS Reaction Game</figcaption>
            </figure>
            <figure>
                <a href="http://www.free4m.com" target="_blank"><img src="${state.images.portraits}"
                        alt="Portrait | Morroccan Wedding"></a>
                <figcaption>Portraits<BR>Watercolor, charcoal</figcaption>
            </figure>
    </div>

</div>

<div id="about">
    <h2>About Me</h2>
    <p>I am an experienced visual artist, search analyst and web
        developer. I have worked in visual art-related roles most of my career, some required modest coding
        skills.</p>

    <p>I am a proficient communicator, I am meticulous and pay attention to detail. I have excellent
        research
        skills and ability to find the most efficient and cost effective solution quickly. As an experienced
        problem solver I have frequently worked in positions where I was the go-to expert for technical
        issues
        that required unconventional thinking. A self-starter I work well with minimal supervision and as an
        integral part of a team.</p>
</div>
</main>`;