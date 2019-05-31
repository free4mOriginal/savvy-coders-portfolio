import Blogitem from './Blogitem';

export default (state) => `<div class="container">

${state.squares}

    <div class="blog-flex">
        
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}
        ${Blogitem(state)}

    </div>

</div>
`;
