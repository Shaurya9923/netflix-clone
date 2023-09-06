import React from 'react';
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    const getNewUsers = async() => {
        const res = await axios.get("/users?new=true",{
            headers:{
                token:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjE2NWViMzE0ZjAzMmZjYTk4YzY1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODYwNTUxOCwiZXhwIjoxNjg5MDM3NTE4fQ.ahuvma7hzH5KJXCJ3uNvuMWvQrWWL_lgtTW-DiOmGps",
                // token:"Bearer "+JSON.parse(localStorage.getItem("user").accessToken),
                Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH'
              },
        })
        setNewUsers(res.data)
    }
    useEffect(() => {
        getNewUsers();
        console.log(newUsers);
    }, [])
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user=>(

                    <li className="widgetSmListItem">
                    <img src={user.profilePic || "data:image/png;base64,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"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                ))}

                
            </ul>
        </div>
    );
}

export default WidgetSm;
