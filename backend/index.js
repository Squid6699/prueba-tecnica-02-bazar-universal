import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();

app.use(cors());
app.use(express.json()); //MIDDLEWARE

mongoose.connect('mongodb://127.0.0.1:27017/Products');

const productsSchema = mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Object
})

const ProductsModel = mongoose.model("products", productsSchema);

app.post("/items", async (req, res) => {
    try {
        const { search } = req.query;

        if (!search){
            return res.status(404).json("SIN PRODUCTOS DISPONIBLES")
        }

        const productTitle = await ProductsModel.find({ title: new RegExp(search, 'i') });

        if (productTitle.length === 0) {
            res.json([]);
        }

        res.json(productTitle);
    } catch (e) {}
})

app.post("/items/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id){
            return res.status(404).json("SIN PRODUCTOS DISPONIBLES")
        }

        const itemId = await ProductsModel.find({ id: id });

        if (itemId.length === 0) {
            res.json([]);
        }

        res.json(itemId);
    } catch (e) {}
})

app.get("/api/items", async (req, res) => {
    try {
        const { q } = req.query;  // Obtener el parámetro de consulta 'q'

        if (!q) {
            return res.status(404).json("ERROR EN TU BUSQUEDA");
        }

        const productTitle = await ProductsModel.find({ title: new RegExp(q, 'i') });  // Crea una expresion regular donde i es para que no sea sencible con upper o lower case

        if (productTitle.length === 0) {
            return res.status(404).json("SIN PRODUCTOS");
        }

        res.json(productTitle);
    } catch (e) {}
});

app.get("/api/items/:id", async (req, res) =>  {
    try {
        const { id } = req.params;

        if (!id){
            return res.status(400).json("INGRESE UNA ID");
        }

        const product = await ProductsModel.findOne({ id: id });

        if (!product){
            return res.status(404).json("NO EXISTE EL PRODUCTO");
        }

        res.json(product);
    } catch (e) {}
})

app.listen(3001, () => {
    console.log("Conectado backend");
});