import post from "../models/Posts.js";

class PostController {
    static async listarPosts(req, res) {
        try {
            const listaDePost = await post.find({});
            res.status(200).json(listaDePost);
        } catch (erro) {
            res.status(500).send(`Erro ao conectar: ${erro.message}`);
        }
    }

    static async cadastrarPost(req, res) {
        try{
            const novoPost = await post.create(req.body);
            res.status(201).json({mensagem: "Post Criado", post: novoPost});
        }catch(erro){
            res.status(500).json({mensagem: "Erro ao cadastrar Post: ",  erro} )
        }
    }
}

export default PostController;
