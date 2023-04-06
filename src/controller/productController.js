const productModel=require("../model/products")

const product=async function (req,res){
try {
    const data=req.body;
    const {title,price,description,size,shippingFees}=data;
    const productData=await productModel.create({
        title,
        description,
        price,
        size,
        shippingFees
    });
    return res.status(201).send({message:"product created sucessfully", data:productData})


    
} catch (error) {
   return res.status(400).send({status:false ,message:error.message}) 
}
}


module.exports={product}

