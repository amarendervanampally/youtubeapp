import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Livechart from './Livechart';

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex w-full'>
    <div className='px-5'>
      <h1>Watchpage</h1>
      <iframe width="800" height="400" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='w-full border-black bg-slate-100 overflow-y-scroll'>
    <Livechart/>
    </div>
    
    </div>
    
    
  )
}

export default Watchpage;