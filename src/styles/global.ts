import { createGlobalStyle } from "styled-components";
import background from '../assets/images/background.jpg';

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

//font-size: 16px(desktop)
html{
    @media (max-width: 1888px){
        font-size: 93.75%; //16*0,93.75 = 15px
    }

    @media (max-width: 728px){
        font-size: 87.5%;//14px
    }
}

//REM = 1rem = font-size(16px)

body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
}


`;