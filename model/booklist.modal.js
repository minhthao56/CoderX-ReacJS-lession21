const mongoose = require('mongoose')

const titlesSchema = new mongoose.Schema({
    tl: String,
    description: String,
    price: String,
    image: String
});
var Titles = mongoose.model("Titles", titlesSchema, "titles");

module.exports = Titles;