const route = require('express').Router();
const Products=require('../Schemas/Product')
const college=require('../Schemas/NewUser');

route.get('/',async(req,res)=>{

    try{
      //  console.log(req.query.id)
        const Users=college(req.query.college) 
         Users.findById(req.query.id).exec().then((result) => {
           // console.log(result)
            items=Products.find({'_id':{$in:result.sellItems}}).exec().then((result) => {
                console.log(result)
                //console.log("a")
                res.send(result)
            }).catch((err) => {
              //  console.log("a")
                res.send('Error')
               
            });
            
        }).catch((err) => {
           // console.log("a")
            res.send('Error')
        });
       
        
    }catch(e){
        //console.log("Error")
        res.send("Error")
    }


})


module.exports=route