const express=require("express");
const mongoose=require("mongoose");
const route=require("./route/route");

const app=express();
app.use(express.json());

mongoose.connect("mongodb+srv://amritkaur:eICw4bvL0Am8jqUH@cluster0.vt4ost1.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT ||4000,()=>{
    console.log("server is running at port "  +(process.env.PORT||4000))
})