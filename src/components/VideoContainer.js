import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos,Setvideos] = useState([]);
    useEffect(() => {
        getVideos();
    },[]);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        //console.log(json.items);
        Setvideos(json.items);
    };
  return(
  <div className='flex flex-wrap'>
    {/* <Videocard info={videos[0]}/> */}
    {videos.map((video)=>(
      <Link to={"/watch?v="+video.id}><Videocard key={video.id} info={video} />
      </Link>
    ))}
  </div>
  );
};

export default VideoContainer;