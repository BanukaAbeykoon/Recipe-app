const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const schema = mongoose.Schema

const recipeschema = new schema({
    recipeName: String ,
    ingredients : String ,
    description : String,
    postid :String
})





const PostModel = mongoose.model('recipedb' , recipeschema)


router.post('/addnewpost' , (req , res)=>{
   
    const newpost = new PostModel({
        recipeName:req.body.recipeName ,
        ingredients:req.body.ingredients ,
        description:req.body.description ,
        postid:req.body.postid
    })
    newpost.save(function(err){
        if(!err)
        {
            res.send('New Post added successfully')
        }
        else{
            res.send(err)
        }
    })

})

router.get('/getposts' , (req , res)=>{
  
    PostModel.find({},function(docs , err){

        if(!err)
        {
            res.send(docs)
        }
        else{
            res.send(err)
        }

    })

})

router.get('/getpostdata/:id' , (req , res)=>{

    let id = req.params.id
    PostModel.findById(id).then((post)=>{

        res.json(post);
       
    }).catch((err)=>{
        console.log(err)
            res.send(err)
            
    })

})

router.post('/updatepost' , (req , res)=>{
   
    PostModel.findOneAndUpdate({postid:req.body.postid}, {

        recipeName:req.body.recipeName ,
        ingredients:req.body.ingredients ,
        description:req.body.description

    },(err)=>{

        if(!err)
        {
            res.send('Recipe Updated Successfully')
        }
        else{
            res.send(err)
        }

    })

})

router.delete('/deletepost/:id' , (req , res)=>{
let id = req.params.id
    PostModel.findByIdAndDelete(id).then(()=>{
        res.send("Deleted Succesfully")
    }).catch((err)=>{
        console.log(err)
            res.send(err)
            
    })
    

})


module.exports = router