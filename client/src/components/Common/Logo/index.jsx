import { Link } from "react-router-dom";
import styled from "styled-components"

const H1 = styled.h1`
    color: #FFFFFF;
    font-weight: 400;
    font-family: "Poppins";
`

const Logo = () => {
    return(
        <Link to="/">
            <H1>BlogNews</H1>
        </Link>
    )
}

export default Logo;