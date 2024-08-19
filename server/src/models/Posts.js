import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    texto: { type: String, required: true},
    imagem: { type: String}
}, {versionKey: false});

const post = mongoose.model("posts", postSchema);
export default post;