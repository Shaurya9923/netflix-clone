import React from 'react';
import Home from './pages/home/Home';
import './app.scss';
import Watch from './pages/watch/Watch';
import{BrowserRouter as Router,Routes,Route,Link,Switch, Navigate} from "react-router-dom";
import Register from './pages/register/register';
import Login from './pages/login/login';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
const App = () => {
const {user} = useContext(AuthContext);
  return(
    <Router>
      <Routes>
          <Route path='/register' exact element={!user ? <Register/> : <Navigate to="/"/>} />
          <Route path='/login' exact element={!user ? <Login/> : <Navigate to="/"/> } />
          <Route path='/' exact element={user ? <Home/> : <Navigate to="/register"/>}/>
          
          <Route path='/movies' exact element={<Home type='movie'/>} />
          <Route path='/series' exact element={<Home type='series'/>} />
          <Route path='/watch' exact element={<Watch/>} />
          
      </Routes>
    </Router>
    ) 
};

export default App;