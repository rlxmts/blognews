import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cabecalho from "../components/Layout/Cabecalho";
import GaleriaPosts from "../components/Sections/GaleriaPosts";
import Rodape from "../components/Layout/Rodape";
import Login from "./Login";
import Painel from "./Painel";
import NovoPost from "./NovoPost";

const AppRotas = () => {
    return(
        <BrowserRouter>
        <Cabecalho />
        <Routes>
            <Route path="/" element={<GaleriaPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Painel />} />
            <Route path="/novo-post" element={<NovoPost />} />
        </Routes>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRotas;