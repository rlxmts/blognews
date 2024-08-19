import mongoose from "mongoose";
async function conectaDataBase(){
    mongoose.connect("mongodb+srv://matheusw3314:padaria33%2314@blog.aih5m.mongodb.net/blognews?retryWrites=true&w=majority&appName=blog");
    return mongoose.connection;
}

export default conectaDataBase;
