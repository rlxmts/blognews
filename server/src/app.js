import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro)=> {
    console.error("Erro de conexão: ", erro);
})
conexao.once("open", ()=> {
    console.log("conexão bem sucedida!")
});

const app = express();
routes(app);

export default app;