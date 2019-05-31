// import axios from 'axios';

export default (state) => `
<figure>
    <img src="https://picsum.photos/200?random${Math.floor(Math.random() * 100)}" width="200" height="200" alt="random image">
    <figcaption>${state.text[Math.floor(Math.random() * 100)]}</figcaption>
</figure>
`;
