import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`

    @font-face {
        font-family: "Poppins";
        src: url("./src/assets/Fonts/Poppins/Poppins-Thin.ttf") format('truetype');
        font-weight: 100;
    }    
    @font-face {
        font-family: "Poppins";
        src: url("./src/assets/Fonts/Poppins/Poppins-Light.ttf") format('truetype');
        font-weight: 300;
    }
    @font-face {
        font-family: "Poppins";
        src: url("./src/assets/Fonts/Poppins/Poppins-Medium.ttf") format('truetype');
        font-weight: 500;
    }
    @font-face {
    font-family: "Montserrat";
    src: url("./src/assets/Fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format('truetype');
    font-weight: 100 900;
    }

    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        text-transform: none;
        font-style: normal;
        box-sizing: border-box;
        font-size: 16px;
        color: #000000;
        font-weight: 300;
        font-family: "Montserrat";
        list-style: none;
    }

    .esconder{
        font-size: 1px;
        color: transparent;
        position: absolute;
        width: 1px;
        height: 1px;
    }
`

export default EstiloGlobal;