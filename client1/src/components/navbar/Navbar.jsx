import React from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { logout } from '../../authContext/AuthAction';
import { AuthContext } from '../../authContext/AuthContext';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    console.log(isScrolled);
    const {dispatch} = useContext(AuthContext);
    return (
        <div className={isScrolled? 'navbar scrolled':'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo" />
                    <Link to="/" className='link'><span>Home</span></Link>
                    <Link to="/series" className='link'><span>Series</span></Link>
                    <Link to="/movies" className='link'><span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src="https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png" alt="Profile" />
                    <div className='profile'>
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
