import styled from "styled-components";
import Container from "../../Common/Container";
import Logo from "../../Common/Logo";
import CampoPesquisa from "../../Common/CampoPesquisa";
import { FaRegMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login";

const Header = styled.header`
    height: 70px;
    background-color: #24292f;
    width: 100%;
    box-shadow: 0px 0px 5px #00000070;
    display: flex;
    align-items: center;
    justify-content: start;

    .container-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .botao-login{
        color: #FFFFFF;
        font-family: "Poppins";
        font-weight: 500;
        font-size: .9rem;
    }
`
const Div = styled.div`
    display: flex ;
    gap: 10px;
    align-items: center;

    .icon-tema{
        cursor: pointer;
    }
`
const Cabecalho = () => {
    return(
        <>
            <Header>
                <Container className="container-header">
                        <Logo />
                        <Div>
                            <CampoPesquisa />
                            <FaRegMoon className="icon-tema" size={20} fill="#FFFFFF"/>
                            <Link to="/login" className="botao-login">Login</Link>
                        </Div>
                </Container>
            </Header>
        </>
    )
}

export default Cabecalho;