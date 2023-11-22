import React, { useEffect, useState } from 'react';
import './home.scss';
import { AcUnit } from '@material-ui/icons';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from 'axios';

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomLists = async()=>{
           try{
                const res = await axios.get(`/lists${type ? "?type="+ type: ""}${genre?  "&genre=" + genre:""}`,{
                    headers:{
                        // token:"Bearer "+JSON.parse(localStorage.getItem("user").accessToken),
                        "token":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWFiMWFjM2IzNmQ1NjJhMjBmYmEyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODUzODMzNCwiZXhwIjoxNjg4OTcwMzM0fQ.VyBkYz1nQq-O302tDHsa1kzigszkTcA65M9oaqMxshI",
                    },
                })
                setLists(res.data);
                
                //console.log(lists);
           }catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre]);
    return (
        <div className='home'>
            <Navbar/>
            <Featured type = {type} setGenre= {setGenre}/>
            {lists.map((list)=>(
                <List list={list}/>
            ))}
            
            {/* <List/>
            <List/>
            <List/>
            <List/> */}
        </div>
    );
}

export default Home;