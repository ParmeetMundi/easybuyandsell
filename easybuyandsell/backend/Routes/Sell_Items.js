const route = require('express').Router();
const Products=require('../Schemas/Product')

route.get('/',async(req,res)=>{
  
  
  const fetched=req.query.fetch
  const count=Products.count();
 // console.log(fetched)

  const Items=await Products.find().sort({createdAt:-1}).skip(Number(fetched)).limit(6);
  res.send(Items)
   

})


module.exports=route