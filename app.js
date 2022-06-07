const { request, response } = require("express");
const express=require("express");
const app=express();
const cors = require("cors")

app.use(cors());
const PORT = process.env.PORT || 3000;
const Peoplesdata = require("./src/model/reviewmodel")

app.get("/" , (req,res)=>{

    Peoplesdata.find()
    .then(data=>{
        res.send(data)})
})


app.listen(PORT , (req,res)=>{
    console.log(`Server running on PORT ${PORT}`);
})