import React, { useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import swal from 'sweetalert2';
import axios from 'axios'
function PostItem({post}, props)
{
    const history = useHistory()

    useEffect(()=>{
            AOS.init()
    }, [])

    function deletepost(postid)
    {
        swal.fire({

            title: 'Are you sure?',

            text: "You won't be able to revert this!",

            icon: 'warning',

            showCancelButton: true,

            confirmButtonColor: '#3085d6',

            cancelButtonColor: '#d33',

            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {

            if (result.isConfirmed) {

              
                axios.post('http://localhost:5000/api/post/deletepost' , {postid:postid}).then(res=>{
                 
                    history.go(0)
                       
                      })
                      .then(res=>res.json())
                .then((result)=>{
                swal.fire("Deleted !", "Delete Details Successfully !!", "success"); 
                    
                    
                },(error)=>{
                    
                    swal.fire("Failed", "Failed!!", "warning");
                })


            }

        })

        
    }

     function deletePackage(postid) {
        swal.fire({
        title: 'Are you sure you want to delete the recipe?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            
               
            axios
                .delete('http://localhost:5000/api/post/deletepost/'+ postid)
                .then((res) => {

                    console.log(res.data);
                    swal.fire("Success", "Package Deleted Successfully", "success");
                   // history.go(0)
                   

                }).catch((err) => {

                    console.log(err.message);
                    swal.fire("Failed", "Failed!!", "warning");
                })


        }
    })
}
   
function gToShowMore(postid) {

    props.history.push("/specificpost/");

}
    return(



          <tbody>
            
                <td > <Link to={{pathname:`/specificpost/${post._id}`}}> {post.recipeName}</Link>  </td>
                <td>{post.ingredients}</td>
                <td>{post.description}</td>
                
                <td>
                  <a className="btn btn-warning" href={`/editpost/${post.postid}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>{deletePackage(post._id)}}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              
            
          </tbody>
        


        
      
    )
}
export default PostItem