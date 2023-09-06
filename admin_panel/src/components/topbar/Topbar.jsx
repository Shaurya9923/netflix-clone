import React from 'react';
import "./topbar.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from 'react';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
    const {dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        // localStorage.removeItem('user');
        // window.location.replace('/login');
        console.log(dispatch)
        dispatch({type: 'LOGOUT'})
    }
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className='topRight'>

                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language/>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src='https://images.unsplash.com/photo-1603320045158-61d0dc0fbb33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW55fGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='Profile Pic' className='topAvatar' />
                    <div className="topbarIconContainer">
                        <button className='loginButton' onClick={handleClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;