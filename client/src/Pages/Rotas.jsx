import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cabecalho from "../components/Layout/Cabecalho";
import GaleriaPosts from "../components/Sections/GaleriaPosts";
import Rodape from "../components/Layout/Rodape";
import Login from "./Login";

const AppRotas = () => {
    return(
        <BrowserRouter>
        <Cabecalho />
        <Routes>
            <Route path="/" element={<GaleriaPosts />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRotas;