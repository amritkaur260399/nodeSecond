const userModel = require("../model/user");
const bcrypt = require("bcrypt");

const registerUser = async function (req, res) {
  try {
    const data = req.body;
    const { firstName, lastName, email, password, address, phoneNumber } = data;
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const userData = await userModel.create({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
    })
    return res.status(201).send({meassge:"user register sucessfully",
    data:userData,
})
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const  getAuthor= async function(req,res){
  try {
    const userData=await userModel.find();
    return res.status(200).send({status:true, message:"list of all user",data:userData})
    
  } catch (error) {
    return res.status(400).send({status:false, message:error.message})
  }
}

const singleUser=async function(req,res){
  try {
    const dataId=req.params.id;
    const  data=await userModel.find({
      _id:dataId
    })
    return res.status(200).send({message:"single author data fetch sucessfully",data:data})
  } catch (error) {
    return res.staus(400).send({status:false , message:error.message})
  }
}

const updateUser=async function(req,res){
 try {
  const userId= req.params.id;
  const data=req.body
  const { firstName,
    lastName,
    email,
    password,
    address,
    phoneNumber}=data
  const userData=await userModel.findOneAndUpdate(
    {_id:userId},
    {$set:{firstName:firstName,lastName:lastName,email:email}},
    {new:true}
  );
  return res.status(200).send({message:"update data sucessfully",data:userData})
 } catch (error) {
  return res.status(400).send({message:error.message})
 }

}

 const deleteUser = async function(req,res){
  try {
    const dataId=req.params.id;
    const data=await userModel.findOneAndDelete({
      _id:dataId
    });
    return res.status(200).send({message:"delete user sucessfully"})
  } catch (error) {
    return res.status(400).send({status:false , message:error.message})
  }
 }


module.exports={registerUser,getAuthor,singleUser,updateUser,deleteUser}