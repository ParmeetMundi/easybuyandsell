const mongoose=require('mongoose');
const express=require('express');
const app=express();
const path=require('path')
const port=process.env.PORT||8080

app.use(express.json({ limit:'1mb'}));
app.use('/ProductImages',express.static('./ProductImages'))
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin ,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

app.disable('etag')
  var elasticsearch = require("elasticsearch");

  // var client = new elasticsearch.Client({
  //   hosts: ["http://localhost:9200"]
  // });
  
  
  // /* Delete index */
  // client.indices.delete({
  //   index: 'productss',
  // }).then(function(resp) {
  //   console.log("Successful query!");
  //   console.log(JSON.stringify(resp, null, 4));
  // }, function(err) {
  //   console.trace(err.message);
  // });

const url='mongodb+srv://admin:admin123@cluster0.sqioe.mongodb.net/testdb?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected");
  });

const Signup=require('./Routes/Signup');
app.use('/SignUp',Signup);

const Sell = require('./Routes/Sell');
app.use('/sell',Sell)

const SellItems=require('./Routes/Sell_Items')
app.use('/products',SellItems)

const Search=require('./Routes/Search')
app.use('/search',Search)

const Myadds=require('./Routes/Myadds')
app.use('/Myadds',Myadds)

const DeleteProduct=require('./Routes/DeleteProducts')
app.use('/DeleteProduct',DeleteProduct)


if(process.env.NODE_ENV ==='production'){

  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}



 app.listen(port,()=>{
     console.log("server started");
 }) 


