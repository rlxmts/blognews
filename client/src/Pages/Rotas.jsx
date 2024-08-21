import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cabecalho from "../components/Layout/Cabecalho";
import Rodape from "../components/Layout/Rodape";
import Login from "./Login";
import Painel from "./Painel";
import NovoPost from "./NovoPost";
import Home from "./Home";
import Post from "./Post";

const AppRotas = () => {
    return(
        <BrowserRouter>
        <Cabecalho />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Painel />} />
            <Route path="/novo-post" element={<NovoPost />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRotas;