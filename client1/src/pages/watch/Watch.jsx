import React from 'react';
import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Watch = () => {
    const location = useLocation();
    // const videoLink = location.state.video;
    console.log("Hello"+location.state);
    
    const [link,setLink] = React.useState(0);
    const getVideo = async () => {
        await fetch(`https://api.pexels.com/videos/videos/857251`,{
            headers:{
                Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH',
            },

        })
        .then((res)=>res.json()).then((data)=>{
        
         setLink((data.video_files[0].link));
        })
    }
    React.useEffect(() => {
        getVideo();
      }, [])

      if(location.state === null){
        return <Navigate to="/" />
      }else{
    return (
        // { !videoLink === undefined && (
        //     <>
        //         <Navigate to="/" />    
        //     </>
        // )}
        
        <div className="watch">
            <Link to="/" className='linkback'>
                <div className="back">
                        <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video classname = "video" src={location.state.video} autoPlay={true} progress controls></video>
        </div>
    );
    }
}

export default Watch;
