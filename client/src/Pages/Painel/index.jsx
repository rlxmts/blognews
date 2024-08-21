import { Link } from "react-router-dom";

const Painel = () => {
    return(
        <section>
            <h1>Painel Administrativo</h1>
            <Link to="/novo-post">Criar novo Post</Link>
        </section>
    )
}

export default Painel;