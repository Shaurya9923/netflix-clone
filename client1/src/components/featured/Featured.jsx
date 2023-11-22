import React from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Featured = ({type,setGenre}) => {
    const [content, setContent] = React.useState({});
    console.log(type)
    React.useEffect(()=>{
        const getRandomContent = async()=>{
            try{
                const res = await axios.get(`/movies/random?type=${type}`,
                {
                    headers:{
                        // token:"Bearer "+JSON.parse(localStorage.getItem("user").accessToken),
                        token:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjE2NWViMzE0ZjAzMmZjYTk4YzY1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODYwNTUxOCwiZXhwIjoxNjg5MDM3NTE4fQ.ahuvma7hzH5KJXCJ3uNvuMWvQrWWL_lgtTW-DiOmGps",
                        Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH'
                    },
                });
                setContent(res.data[0]);
                console.log(res.data[0].img);
                

            }catch(err){
                console.log(err);
            }
        }
        getRandomContent();

    },[])
    //console.log(content)
    console.log(setGenre)
    return (
        <div className='featured'>
            {type && (
                <div className = "category">
                    <span>{type === 'movies' ? "movie" : "series"}</span>
                    <select name='genre' id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>

                    </select>
                </div>
            )}
            <img src={content.img} alt=""/>
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className='desc'>{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <Link to='/watch' className='linkback'>
                            <PlayArrow/>
                            <span>Play</span>
                        </Link>
                    </button>
                    <button className="more">
                        <InfoOutlined/> 
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
