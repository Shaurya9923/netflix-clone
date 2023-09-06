import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";
import{BrowserRouter as Router,Routes,Route,Link, Navigate} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
function App() {
  const {user} = useContext(AuthContext);
  
  return (
    <Router className="App">
      <Topbar/>
      <Routes>
        <Route path='/login' exact element={user ? <Navigate to="/" /> : <Login/>} /> 
      </Routes>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={user ? <Home/> :  <Navigate to ="/login"/>} />

          {/* <Route path='/login' exact element={user ? <Navigate to="/" /> : <Login/>} />  */}

          <Route path='/users' exact element={user ?<UserList/> : <Navigate to="/login"/>} />

          <Route path="/users/:userId" exact element={user ? <User/> : <Navigate to="/login"/>}/>

          <Route path="/newUser" exact element={user ? <NewUser/> : <Navigate to="/login"/>}/>

          <Route path="/movies" exact element={user ? <ProductList/>: <Navigate to= "/login"/>}/>

          <Route path="/movies/:movieId" exact element={user ? <Product/> : <Navigate to = "/login"/>}/>

          <Route path="/newproduct" exact element={user ? <NewProduct/> : <Navigate to ="/login"/>}/>

          <Route path="/lists" exact element={user ? <ListList/> : <Navigate to ="/login"/>}/>

          <Route path="/list/:listId" exact element={user ? <List/> : <Navigate to ="/login"/>}/>

          <Route path="/newlist" exact element={user ? <NewList/> : <Navigate to ="/login"/>}/>


        </Routes>
      
        </div>
    </Router>
  );
}

export default App;
