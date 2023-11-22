import React from 'react';
import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ListItem = ({index,item}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [movie, setMovie] = React.useState({});
    const [link,setLink] = React.useState(0);
    const trailer = "https://player.vimeo.com/external/236075858.sd.mp4?s=488e67b8e35ca33ef18880b46bb4752da56a4035&profile_id=165&oauth2_token_id=57447761";
    const getVideo = async () => {
        await fetch(`https://api.pexels.com/videos/videos/857251`,{
            headers:{
                Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH',
            },

        })
        .then((res)=>res.json()).then((data)=>{
        //  let data1 = JSON.stringify(data.video_files[0].link);   
         setLink((data.video_files[1].link));
        })
        // .then((data)=>setLink(data.video_files[0].link));
        // .then((data)=>data.video_files[0].link);
    }
    

    React.useEffect(() => {
        getVideo();
        const getMovie = async()=>{
            try{
                const res = await axios.get(`/movies/find/${item}`,
                {
                    headers:{
                        // token:"Bearer "+JSON.parse(localStorage.getItem("user").accessToken),
                        "token":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjE2NWViMzE0ZjAzMmZjYTk4YzY1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODYwNTUxOCwiZXhwIjoxNjg5MDM3NTE4fQ.ahuvma7hzH5KJXCJ3uNvuMWvQrWWL_lgtTW-DiOmGps",
                        Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH'
                    },
                })
                setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
      }, [item])
    console.log(movie)
    return (
        <Link to={"/watch"} state={movie} className=''>
        <div className='listItem' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} 
        style={{left:isHovered && index * 225 -50 + index * 2.5}}>
            
            <img src={movie.imgSm} alt='movie_series'></img>
            {isHovered && (

            <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className='itemInfo'>
                <div className="icons">
                    <Link to='/watch' className='link'>
                        <PlayArrow className='icon linkback'/>
                    </Link>
                    <Add className='icon'/>
                    <ThumbUpAltOutlined className='icon'/>
                    <ThumbDownOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className='limit'>+{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className="desc">
                    {movie.desc}
                </div>

                <div className="genre">
                    {movie.genre}
                </div>
                
            </div>
            </>
            )}
        </div>
        </Link>
    );
}

export default ListItem;
