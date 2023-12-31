import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #554DDE;
        --accent-pink:#F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary:#6A6D9E;
        --dark-primary:#16194F;
        --border-color:#CAD6F1;
        

    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;

    }
    body{
        background-color: var(--neutral-light);
        color : white;
        font-size : 1.2 rem;

    }

    a{
        color: inherit;
        font-size:1.6rem;
        text-transform: uppercase;
    }
    p{
        color: var(--lavender-secondary);
        line-height:1.9rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
    }

`;

export default GlobalStyle;