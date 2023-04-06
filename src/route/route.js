const express=require("express");
const router=express.Router();
const userController=require("../controller/userController")
const productController=require("../controller/productController")


// user router 
router.post("/registerUser" ,userController.registerUser)
router.get("/getAllUser", userController.getAuthor)
router.get("/singleUser/:id", userController.singleUser)
router.put("/updateUser/:id", userController.updateUser)
router.delete("/deleteUser/:id", userController.deleteUser)

//
router.post("/Product",productController.product)




module.exports=router