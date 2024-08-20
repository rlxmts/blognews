import styled from "styled-components";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import Botao from "../../components/Common/Botao";

const SecaoLogin = styled.section`
    padding: 5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;

    h2{
        font-family: "Poppins";
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .obs{
        display: block;
        max-width: 300px;
        word-wrap: wrap;
        font-size: .7rem;
        font-weight: 600;
        margin-top: 1rem;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label{
        display:block;
        font-weight: 600;
    }

    input{
        outline: none;
        width: 300px;
        padding: .5rem;
        border-radius: 10px;
        border: 1px solid #00000070;
        margin-right: 10px;
    }

    .icone-olho{
        cursor: pointer;
        position: absolute;
        right: -15px;
        bottom: 8px;
    }
`

const Div = styled.div`
    position: relative;
`

const Login = () => {

    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [tipoDeInput, setTipoDeInput] = useState('password');

    function mostraOuOcultaSenha() {
        setSenhaVisivel(!senhaVisivel);
        tipoDeInput === 'password' ? setTipoDeInput('text') : setTipoDeInput('password');
    }

    return(
        <SecaoLogin>
                <div>
                    <h2>Login</h2>
                    <Form>
                        <Div>
                            <label htmlFor="usuario">Usuário:</label>
                            <input id="usuario" type="text"/>
                        </Div>
                        <Div>
                            <label htmlFor="senha">Senha:</label>
                            <input id="senha" type={tipoDeInput} />
                            {senhaVisivel ? 
                                <IoEyeOffOutline onClick={mostraOuOcultaSenha} className="icone-olho" size={20} /> :                           
                                <IoEyeOutline onClick={mostraOuOcultaSenha} className="icone-olho" size={20} /> }
                        </Div>
                        <Botao>Entrar</Botao>
                    </Form>
                    <span className="obs">
                        Obs: Esse login é apenas para inclusão de novos posts feitos por mim: Matheus. Ainda não existe uma opção para cadastrar novos usuários.
                    </span>
                </div>
        </SecaoLogin>
    )
}
export default Login;