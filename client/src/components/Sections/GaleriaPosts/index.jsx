import styled from "styled-components";
import Container from "../../Common/Container";
import { useEffect, useState } from "react";

const Section = styled.section`
    padding: 2rem 0;

    h2{
        font-weight: 500;
    }
`

const GaleriaPosts = ()=> {

    const [listaDePost, setListaDePost] = useState([]);

    useEffect(()=> {
        async function buscaApi(){
            const api = await fetch("http://localhost:3000/posts"); 
            const apiConvertida = await api.json();
            console.log(apiConvertida);
        }
        buscaApi();
    }, []);


    return(
        <Section>
            <Container>
                <h2> Posts mais recentes:</h2>
            </Container>
        </Section>
    )
}

export default GaleriaPosts;