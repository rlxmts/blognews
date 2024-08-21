import react from "react";
import styled from "styled-components";
import Container from "../../Common/Container";
import { useBuscaPost } from "../../../Hooks/useBuscaPosts.jsx";

const Section = styled.section`
    padding: 2rem 0;

    h2{
        font-weight: 500;
        text-align: center;
    }
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    gap: 1rem;
    padding: 2rem 0;
`
const Li = styled.li`
    padding: 1rem;
    border: 1px solid #00000070;
    border-radius: 10px;
`

const TituloPost = styled.h3`
    font-size: .9rem ;
    font-weight: 600;
`
const PreviaTexto = styled.span`
    font-size: .7rem;
    font-weight: 600;
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-top: 5px;
`

const GaleriaPosts = ()=> {    

    const {posts, erro, carregando} = useBuscaPost();

    if(carregando)return <p>Carregando...</p>
    if(erro) return <p>{erro}</p>
    
    return(
        <Section>
            <Container>
                <h2> Posts recentes:</h2>
                <Ul>
                    {posts.map( item => {
                        return(
                            <Li key={item._id}>
                                <a href="#">
                                    <TituloPost>{item.titulo}</TituloPost>
                                    <PreviaTexto>{item.texto}</PreviaTexto>
                                </a>
                            </Li>
                        )
                    })}
                </Ul>
            </Container>
        </Section>
    )
}

export default GaleriaPosts;