import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
function AddPost()
{
    const[recipeName , setrecipeName]=useState('')
    const[ingredients , setingredients]=useState('')
    const[description , setdescription]=useState('')

    function addpost()
    {
        var post = {
            recipeName : recipeName , 
            ingredients : ingredients , 
            description : description ,
            postid : uniqid()
        }

        axios.post('/api/post/addnewpost',post).then(res=>{
            Swal.fire('Congrats' , 'Your Recipe Added Successfully' , 'success')
        }).then(err=>{
            console.log(err)
        })
        
    }

    return(
        <div className='row justify-content-center'>

            <div className='col-md-6'>
                <h1 className='m-3'>Add New Recipe</h1>
                <div>
                     <a href="/" className='btn btn-primary'>See posts</a> 
                     <input type="text" placeholder='Add Recipe Name' className='form-control' 
                     value={recipeName} onChange={(e)=>{setrecipeName(e.target.value)}}
                     />
                     <input type="text" placeholder='Add Ingredients' className='form-control'
                     value={ingredients} onChange={(e)=>{setingredients(e.target.value)}}
                     />
                     <textarea cols="30" rows="10" placeholder='Add Your Description' className='form-control'
                     value={description} onChange={(e)=>{setdescription(e.target.value)}}
                     />

                     <button onClick={addpost} className='btn btn-success float-left'>Add Recipe</button>

                </div>

            </div>
            
        </div>
    )
}
export default AddPost