import styled from "styled-components";
import Container from "../../Common/Container";
import Logo from "../../Common/Logo";
import CampoPesquisa from "../../Common/CampoPesquisa";
import { FaRegMoon } from "react-icons/fa6";

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
`
const Div = styled.div`
    display: flex ;
    gap: 10px;
    align-items: center;

    .icon-tema{
        cursor: pointer;
    }
`
const Login = styled.a`
    color: #FFFFFF;
    font-family: "Poppins";
    font-weight: 500;
    font-size: .9rem;
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
                            <Login href="#">Login</Login>
                        </Div>
                </Container>
            </Header>
        </>
    )
}

export default Cabecalho;