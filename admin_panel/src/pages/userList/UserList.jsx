import * as React from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {userRows} from '../../dummydata';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const UserList = () => {
    const[data, setData] = useState(userRows);
    const handleDelete = (id) => {
            setData(data.filter((item) => item.id !== id));
            console.log(data);
            return (
                <div className='userList'>
                    <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
                </div>
            );
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return(
                <div className='userListUser' >
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
        field: 'transaction',
        headerName: 'Transaction Volume',
        width: 180,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 200, renderCell: (params) => {
            return(
                <>
                    <Link to={"/users/" + params.row.id}><button className="userListEdit"> Edit </button></Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }
      }
      ];
      
    //   const rows = [
    //     { id: 1, username: 'Uday', 
    //     avatar:'https://media.licdn.com/dms/image/C4D03AQHCJSpEZq96dg/profile-displayphoto-shrink_100_100/0/1653284060629?e=1686182400&v=beta&t=oWS4BnSse0ZotfAugm6qz6Ayb2_AK3IqL6Nsx7LuUZQ',
    //     email:'john_snow@gmail.com', status:'active', transaction:'$120.00' },

    //   ];
    return (
        <div className='userList'>
            <div className='userListTitleContainer'>
                <h1>User List</h1>
                <Link to='/newUser'><button className='userAddButton'>Create User</button></Link>
            </div>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    );
}

export default UserList;
