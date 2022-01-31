import './App.css';
import PostList from './PostList'
import AddPost from './AddPost';
import EditPost from './EditPost';
import SpecificPost from './specificpost';
import {BrowserRouter , Route,NavLink} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   
         
         <BrowserRouter>
         <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Recipe Management System
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
        <ul className="navbar-nav">
         
          <li className="nav-item- m-1">
            <NavLink className="btn btn-secondary btn btn-outline-info" to="/addpost">
              Add Recipe
            </NavLink>
          </li>
         
        </ul>
      </nav>
      </div>
            <Route path='/' component={PostList} exact/>
            <Route path='/addpost' component={AddPost} exact />
            <Route path='/editpost/:postid' component={EditPost}/>
            <Route path='/specificpost/:id' component={SpecificPost}/>

         </BrowserRouter>
        
        
      

   
  );
}

export default App;
