import axios from "axios";
import { Link } from "react-router-dom";
import { useBuscaPost } from "../../Hooks/useBuscaPosts.js";
import Container from "../../components/Common/Container";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import styled from "styled-components";
import PopUpDelete from "./PopUp.jsx";
import { useState } from "react";

const SecaoPainel = styled.section`
    padding: 5rem 0;

    h1{
        font-size: 2rem;
        font-family: "Poppins";
    }

    .criar-post-bt{
        padding: .5rem 1rem;
        background-color: #24292f;
        color: #FFFFFF;
        display: block;
        margin: 1rem 0;
        text-align: center;
        max-width: 300px;
        border-radius: 10px;

        &:hover{
            background-color: #00205b;
        }
    }
`
const LinkPost = styled.li`
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #00000070;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const OpcaoesAdm = styled.div`
    display: flex;
    gap: 10px;

    .icone-opcao-delete:hover{
        path{
            transition: .5s;
            color: red;
        }
    }
`


const Painel = () => {
    const {posts, setPosts} = useBuscaPost();
    const [popUpVisivel, setPopVisivel] = useState(false);
    const [postSelecionado, setPostSelecionado] = useState('');

    const abrirPopUp = (post)=> {
        setPopVisivel(true);
        setPostSelecionado(post);
    }

    const deletarConfirmado = async ()=> {
        const listaAtualiza = posts.filter( post => post._id !== postSelecionado);
        setPosts(listaAtualiza);
        try{
            await axios.delete(`http://localhost:3000/posts/${postSelecionado}`);
        }catch(erro){
            console.log(erro);
            setPosts(postsAnteriores => [...postsAnteriores, posts.find(post => post._id === postSelecionado)]);
        }
        setPopVisivel(false);
    }

    const deletarCancelado = () => {
        setPopVisivel(false);
    }

    return(
        <SecaoPainel>
            <Container>
                <h1>Painel Administrativo</h1>
                <Link to="/novo-post" className="criar-post-bt">Criar novo Post</Link>
                <ul>
                    {posts.map(post => {
                        return(
                            <LinkPost className="item-post" key={post._id}>
                                {post.titulo}
                                <OpcaoesAdm>
                                    <FaRegTrashCan 
                                        size={20} 
                                        className="icone-opcao-delete" 
                                        onClick={()=> abrirPopUp(post._id)}
                                    />
                                    <FaRegEdit size={20} />
                                </OpcaoesAdm>
                            </LinkPost>
                        )
                    })}
                </ul>
                {popUpVisivel ? 
                    <PopUpDelete  aoClicarConfirmar={deletarConfirmado} aoClicarCancelar={deletarCancelado} />  : ''}                
            </Container>
        </SecaoPainel>
    )
}

export default Painel;