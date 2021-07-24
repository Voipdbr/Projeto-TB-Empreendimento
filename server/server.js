const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const app = express();

const ProdutoModel = require("./models/product");

app.use(express.json());
app.use(cors());

const URI = "mongodb+srv://desafioUser:desafioPassword@apptruckcluster.lgcd0.mongodb.net/Desafio?retryWrites=true&w=majority"

mongoose.connect(
    URI, 
    {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
);


app.post("/models/product", async (req, res) => {

    const {Nome, Description, Preco } = req.body;
    

    const produto = new ProdutoModel({ Nome,  Description,  Preco})

    try {
        const entity = await produto.save();
        res.send(entity);
    } catch (err) {
        console.log(err)
    }
})

app.get("/models/product", async (req, res) => {
    ProdutoModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }

        res.send(result)
    })
})

app.listen(5000, () => {
    console.log("Server is running... ");
})