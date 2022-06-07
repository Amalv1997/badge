const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Testimony");

const Schema = mongoose.Schema;

const PeoplesSchema = new Schema({

    slno: Number,
    name: String,
    review: String,
    imageurl: String

});

var peoples = mongoose.model("peoples", PeoplesSchema);

module.exports = peoples;