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
}

export default PostController;
