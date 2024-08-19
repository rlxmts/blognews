import express from "express";
import PostController from "../controllers/postControllers.js";

const routes = express.Router();
routes.get("/posts", PostController.listarPosts);
export default routes;