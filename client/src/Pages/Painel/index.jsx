import { Link } from "react-router-dom";
import GaleriaPosts from "../../components/Sections/GaleriaPosts";

const Painel = () => {
    return(
        <section>
            <h1>Painel Administrativo</h1>
            <Link to="/novo-post">Criar novo Post</Link>
            <GaleriaPosts />
        </section>
    )
}

export default Painel;