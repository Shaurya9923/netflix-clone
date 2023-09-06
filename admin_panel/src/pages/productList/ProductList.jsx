import React, { useEffect } from 'react';
import './productList.css';
import { getMovies, deleteMovie } from '../../context/movieContext/apiCalls';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { Button } from '@material-ui/core';
import {productRows} from '../../dummydata';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';


const ProductList = () => {
    const [data, setData] = useState(productRows);
    const {movies, dispatch} = useContext(MovieContext);
    useEffect(()=>{
        getMovies(dispatch)
    }, [dispatch])
    
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
        deleteMovie(id,dispatch)
        return (
            <div className='productList'>
                <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
            </div>
        );
    }
    console.log(movies);
    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
            return(
                <div className='productListItem' >
                    <img className='productListImg' src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'year', width: 120 },
        { field: 'limit', headerName: 'limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        
    {
        field: 'action',
        headerName: 'Action',
        width: 200, renderCell: (params) => {
            return(
                <>
                    <Link to={{pathname:"/movies/" + params.row._id}} state= {params.row}><button className="productListEdit"> Edit </button></Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                </>
            )
        }
    }
    ];
    return (
        <div className='productList'>
            <div className='productListTitleContainer'>
                <h1>Product List</h1>
                <Link to='/newproduct'><button className='productAddButton'>Create Product</button></Link>
            </div>
            <DataGrid rows={movies} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection getRowId={(r)=>r._id} />
        </div>
    );
}

export default ProductList;
