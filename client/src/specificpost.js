import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SpecificPost(props)
{
    const [post, setpost] = useState([]);
    
     useEffect(()=>{

        let  postid = props.match.params.id;
        console.log(postid);

        axios.get('http://localhost:5000/api/post/getpostdata/' + postid).then(res=>{
            console.log(res.data)
    setpost(res.data);
            console.log(post);
        }).catch(err=>{
            console.log(err)
        })

     } , []) 

     
         return(
            
            
            <div id="wrapper" className="toggled">
<div id="page-content-wrapper">
<div className="container-fluid">

<div className="container bg-info rounded-3">
<div className="row justify-content-center">
      
   
        <div className="col-lg-9 mt-2 mb-2">
           
        <div class="card text-center">
        <div class="card-header">
            <h2>Recipe Details</h2>
        </div>
        <div class="card-body">
        <div class="card text-left">
            <h5 class="card-title">Recipe Name &emsp;&emsp;&emsp;{post.recipeName}</h5><br/>
            <h5 class="card-title">Ingredients &emsp;&emsp;&emsp;{post.ingredients}</h5><br/>
            <h5 class="card-title">Description &emsp;&emsp;&emsp;{post.description}</h5><br/>
            </div>
          
           
        </div>
        
        </div>
                
        </div>
        </div>
        
        </div>
                
        </div>
        </div>
        </div>
      
        
       

    )
}
