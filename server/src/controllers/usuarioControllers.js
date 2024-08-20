import usuario from "../models/Usuarios";
import usuario from "../models/Usuarios";

class UsuarioController {
    static async conectaUsuario(req,res) {
        const { usuario, senha } = req.body;
        
        try{
            const user = await usuario.findOne({  usuario });
            if(!user) {
                return res.status(400).send("Usuario incorreto!");
            }
        }
    }
}