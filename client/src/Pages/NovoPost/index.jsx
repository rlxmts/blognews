import styled from "styled-components";
import Container from "../../components/Common/Container";
import Botao from "../../components/Common/Botao";

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
    return(
        <Section>
            <Container className="container-novopost">
                <form>
                    <div>
                        <label htmlFor="titulo">Titulo do Artigo</label>
                        <input id="titulo" required/>
                    </div>
                    <div>
                        <label htmlFor="texto">Texto</label>
                        <textarea rows="8" id="texto"/>
                    </div>
                    <div>
                        <label htmlFor="imagem">Imagem</label>
                        <input id="imagem" placeholder="http://...."/>
                    </div>
                    <Botao>Postar</Botao>
                </form>
            </Container>
        </Section>
    )
}

export default NovoPost;