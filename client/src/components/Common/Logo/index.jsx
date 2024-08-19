import styled from "styled-components"

const H1 = styled.h1`
    color: #FFFFFF;
    font-weight: 400;
    font-family: "Poppins";
`

const Logo = () => {
    return(
        <a href="/">
            <H1>BlogNews</H1>
        </a>
    )
}

export default Logo;