export default state => `${state.squares}

<div class="container">
    <div id="subtitle">
        <p>Web Developer <span style="color:tomato">|</span> <em>Visual Artist</em></p>
        <p>
            <a href="https://www.linkedin.com/in/zhanaliner/" target="_blank"><i class="fab     fa-linkedin"></i></a> .
            . . <a href="https://github.com/free4mOriginal" target="_blank"><i class="fab fa-github"></i></a>
        </p>
    </div>
    <div class="blog-flex">
        <figure>
            <a href="https://courselist.netlify.com/" target="_blank">
            <img src="${state.images.courseList}" alt="Searchable React web app">
            <figcaption>Course List | Searchable React web app</figcaption>
            </a>
        </figure>
        <figure>
            <a href="https://karinaliner.netlify.com/" target="_blank">
                <img src="${state.images.karina}" alt="Karina Liner web app">
                <figcaption>Capstone | Jewelry Designer Portfolio React web app</figcaption>
            </a>
        </figure>
        <figure>
            <a href="https://jammming.netlify.com/" target="_blank">
                <img src="${
                  state.images.jammmingIMG
                }" alt="Spotify API web app">
                <figcaption>Spotify API React web app | Jammming</figcaption>
            </a>
        </figure>
        <figure>
            <a href="https://reaction-game-js.netlify.com/" target="_blank"><img src="${
              state.images.reactionGame
            }" alt="JavaScript Reaction Game">
                <figcaption>JavaScript Reaction Game web app</figcaption>
            </a>
        </figure>
        <figure>
            <a href="http://www.free4m.com" target="_blank"><img src="${
              state.images.portraits
            }"
                    alt="Portrait | Morroccan Wedding">
                <figcaption>Fine Art and Design | watercolor, charcoal</figcaption>
            </a>
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
</div>`;
