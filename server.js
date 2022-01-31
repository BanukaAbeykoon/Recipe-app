const express = require('express')
const app = express()
const dbfile = require('./conn')
const cors = require("cors");
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
const postroute = require('./routes/post')

app.use(cors());


const PostRouter = require("./routes/post.js");

app.use("/posts", PostRouter);

app.use('/api/post' , postroute)

 app.get('/' , (req , res)=>{
       res.end('Helloworld With Node JS and Express JS')
 })

app.listen(5000 , function(){

    console.log('Node JS and Express Server Started successfully with Nodemon')

})