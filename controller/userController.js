const user=require('../model/user')

module.exports.CreateUser=async(req,res)=>{
try {
    const userdata=new user(req.body)
    const result= await userdata.save()
    res.status(200).json(result)
} catch (error) {
    console.log(error,'server error');
}
}



module.exports.getUser=async(req,res)=>{
try {
  const result =await user.find({})
  res.status(200).json(result)
} catch (error) {
    console.log(error,'server error');
}
}


module.exports.getUserById=async(req,res)=>{
try {
    const id=req.params.id
  const result =await user.findOne({_id:id})
  res.status(200).json(result)
} catch (error) {
    console.log(error,'server error');
}
}