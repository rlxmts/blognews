import express from "express";
import PostController from "../controllers/postControllers.js";
const routes = express.Router();
routes.get("/posts", PostController.listarPosts);
routes.post("/posts", PostController.cadastrarPost);
export default routes;