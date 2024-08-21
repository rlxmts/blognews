import axios from "axios";
import styled from "styled-components";
import Container from "../../components/Common/Container";
import Botao from "../../components/Common/Botao";
import { useState } from "react";

const Section = styled.section`
    padding: 5rem 0;
    
    .container-novopost{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
    }

    form{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }

    input, textarea{
        outline: none;
        border-radius: 10px;
        border: 1px solid #00000070;
        width: 100%;
        max-width: 600px;
        padding: .5rem;
    }

    label{
        display:block;
    }
`

const NovoPost = () => {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [imagem, setImagem] = useState('');

    const enviarPost = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/posts', {
            titulo: titulo,
            texto: texto,
            imagem: imagem
        });
    }

    return(
        <Section>
            <Container className="container-novopost">
                <form onSubmit={(e)=> enviarPost(e)}>
                    <div>
                        <label htmlFor="titulo">Titulo do Artigo</label>
                        <input 
                            onChange={(e)=> setTitulo(e.target.value)}
                            id="titulo" 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="texto">Texto</label>
                        <textarea 
                            onChange={(e)=> setTexto(e.target.value)}
                            rows="8" 
                            id="texto"
                        />
                    </div>
                    <div>
                        <label htmlFor="imagem">Imagem</label>
                        <input
                            onChange={(e)=> setImagem(e.target.value)} 
                            id="imagem"     
                            placeholder="http://..."
                        />
                    </div>
                    <Botao type="submit">Postar</Botao>
                </form>
            </Container>
        </Section>
    )
}

export default NovoPost;