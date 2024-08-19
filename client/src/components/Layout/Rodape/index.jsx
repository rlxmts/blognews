import styled from "styled-components";
import Container from "../../Common/Container";

const Footer = styled.footer`
    width: 100%;
    padding: 1rem;
    text-align: center;

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

const LinksRedesSociais = styled.a`
    font-size: .8rem;
    color: #0969da;
    font-weight: 600;
`
const Creditos = styled.span`
    font-size: .8rem;
    font-weight: 600;
`

const Rodape = () => {
    return(
        <Footer>
            <Container>
                <Creditos> Feito por: Matheus Cruz</Creditos>
                <ul>
                    <li><LinksRedesSociais href="#">GitHub</LinksRedesSociais></li>
                    <li><LinksRedesSociais href="#">Linkedin</LinksRedesSociais></li>
                    <li><LinksRedesSociais href="#">Portfólio</LinksRedesSociais></li>
                </ul>
            </Container>
        </Footer>
    )
}

export default Rodape;