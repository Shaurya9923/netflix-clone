import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">
                    Edit User
                </h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media.licdn.com/dms/image/C4D03AQHCJSpEZq96dg/profile-displayphoto-shrink_100_100/0/1653284060629?e=1686182400&v=beta&t=oWS4BnSse0ZotfAugm6qz6Ayb2_AK3IqL6Nsx7LuUZQ" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Uday</span>
                            <span className="userShowUserTitle">GMC Majoor</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                            Account Details </span>
                            <div className="userShowInfo">
                                <PermIdentity className='userShowIcon'/>
                                <span className="userShowInfoTitle">UdayMajoor99</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className='userShowIcon'/>
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div>
                            <span className="userShowTitle">
                            Contact Details </span>
                            <div className="userShowInfo">
                                <PhoneAndroid className='userShowIcon'/>
                                <span className="userShowInfoTitle">+1 123 456 789</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className='userShowIcon'/>
                                <span className="userShowInfoTitle">UdayMajoor99@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className='userShowIcon'/>
                                <span className="userShowInfoTitle">Guelph | CAN </span>
                            </div>
                        
                    </div>
                </div>


                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>        
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="UdayMajoor99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Uday Majoor" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="UdayMajoor99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 789" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Guelph | CAN" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://media.licdn.com/dms/image/C4D03AQHCJSpEZq96dg/profile-displayphoto-shrink_100_100/0/1653284060629?e=1686182400&v=beta&t=oWS4BnSse0ZotfAugm6qz6Ayb2_AK3IqL6Nsx7LuUZQ" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                <input type='file' id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;
