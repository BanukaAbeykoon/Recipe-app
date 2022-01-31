import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'


export default function EditPost(props)
{
 
    
    const [post, setpost] = useState([]);

    const params = useParams()
    const[recipeName , setrecipeName]=useState('')
    const[ingredients , setingredients]=useState('')
    const[description , setdescription]=useState('')
    
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

       
       setrecipeName(post.recipeName)
       setingredients(post.ingredients)
       setdescription(post.description)
     
    } , []) 




    function editpost()
    {

        const updatedpost ={
            recipeName : recipeName ,
            ingredients : ingredients ,
            description : description ,
            
        }

        axios.post('/api/post/updatepost' , updatedpost).then(res=>{
            console.log(res)
            alert(res.data)
            // history.push('/')
        }).catch(err=>{
            console.log(err)
        })

    }

    return(
        <div className='row justify-content-center'>
           <div className='col-md-6'>
                <h1 className='m-3'>Edit Recipe</h1>
                

                <div>
                     
                     <input type="text" placeholder='Add Recipe Name' className='form-control' 
                     value={recipeName} onChange={(e)=>{setrecipeName(e.target.value)}}
                     />
                     <input type="text" placeholder='Add Ingredients' className='form-control'
                     value={ingredients} onChange={(e)=>{setingredients(e.target.value)}}
                     />
                     <textarea cols="30" rows="10" placeholder='Add Your Description' className='form-control'
                     value={description} onChange={(e)=>{setdescription(e.target.value)}}
                     />

                     <button onClick={editpost} className='btn btn-success float-left'>Edit Post</button>

                </div>
            </div>
        </div>
    )
}
