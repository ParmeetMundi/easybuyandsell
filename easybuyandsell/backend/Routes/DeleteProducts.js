const route = require('express').Router();
const Products=require('../Schemas/Product')
const college=require('../Schemas/NewUser');

route.post('/',async(req,res)=>{

     try{
         
        const userModel=college(req.body.college)

        await userModel.findById(req.body.id).exec().then((user) => {
             const index=user.sellItems.indexOf(req.body.productId)  
             user.sellItems.splice(index,1)
             user.save()
           // console.log(user.sellItems)
        }).catch((err) => {
             throw err    
        });
        
       await Products.deleteOne({_id:req.body.productId})
        
     }catch(e){
         
         res.send("Error")
     }
})

module.exports=route