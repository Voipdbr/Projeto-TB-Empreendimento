const mongoose = require("mongoose");
const InfoSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true,
    },
    Description:{
        type: String,
        required: true,
    },
    Preco:{
        type: Number,
        required: true,
    },
})

const Produtos = mongoose.model("Produtos", InfoSchema)
module.exports = Produtos;