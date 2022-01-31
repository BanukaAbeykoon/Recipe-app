import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
function PostList(props)
{
    const[postsdata , setpostsdata]=useState([])
    
     useEffect(()=>{

        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
            setpostsdata(res.data)
        }).catch(err=>{
            console.log(err)
        })

     } , []) 


    



     const postlist = postsdata.map(post=>{
         return(
            

<div id="wrapper" className="toggled">
<div id="page-content-wrapper">
<div className="container-fluid">

<div className="container bg-info rounded-3">
<div className="row justify-content-center">
        <div  class="col-9">
    
  <br/><br/>
  <div class="p-3 mb-2 bg-primary text-dark rounded-3">
  
  <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
    <thead>
      <tr>
        
        <th scope="col" > Recipe Name</th>
        <th scope="col">Ingredients</th>
        <th scope="col">Description</th>
        <th scope="col">Option</th>
      </tr>
    </thead>
  
      
  
                 <PostItem post={post}/>
        
      
    
  </table>

 
        </div>
        </div>
        </div>


</div>
</div>
</div>
</div>

         )
     })

    return(
        <div>
            
            
            {postlist}
            

        </div>
    )
}
export default PostList