import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';

const Head = () => {
  const [searchQuery,SetsearchQuery] = useState('');
  const [seggestion,Setseggestion] = useState([]);
  const [showseggestion,Setshowseggestion] = useState(false);
  useEffect(()=>{
   // console.log(searchQuery);
    setTimeout(()=>getsearchSuggestions(),3000);
  },[searchQuery]);
  //console.log(searchQuery);
  const getsearchSuggestions = async()=>{
    console.log("API CALL" +searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery);
    const json = await data.json();
   // console.log(json[1]);
    Setseggestion(json[1]);
  }
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-5'>
        <div className='flex col-span-1'>
        <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAACgCAMAAAChb6mEAAAAYFBMVEX///8AAAAyMjI9PT3Dw8NRUVH5+fmnp6dZWVm7u7vR0dFNTU3g4ODKysqrq6u3t7fX19fw8PB3d3dDQ0NkZGQ4ODidnZ2VlZVxcXHo6OiCgoIiIiIoKChISEheXl4aGhqrtfgQAAACmUlEQVR4nO3d61KkMBAFYJYBhmG4XwUV3/8tFbdcLa3qdPrHdhrP9wR9igRCaCCKAAAAAAAA/ptyHqc4bNM4l/xAXTP9sWFqOl6kItUu1UNacCI12mV6as4XiRGq0K5QwDX8LtoFClzoSLV2fSI1mSnWLk8kpiK12tUJtUSmRbs4oYXIlGsXJ5SfbjrRE+qMmSxenQ7UFepBuzihByKTzUsufdFdtYsTIu+i7trVidypSEYXEtQy4k2vXZ9AT0eKOntLidy5J9FaC5U7Rt57KFvDr2dEeht+tZ0lUlwzN8OysrZxTk/rMuNFOlJ1a5vcwpa0a8dPBAAAAAAAAAAAABCark1C1zK3yv/Kmn68X0J3H/uGvbmcpFYebMRpwjtI26N2qR4eN86hMvec0B1p167R2+6KdNWuUODqmEza9YnQU8rW8+kPdIOEdnVCVKSbdnFCNyLTpl2c0EZkstFC8BPVGGZlTfTdb+vxtfQ211fpLztHJNrFCZF3HNrFCVGRjA4+auhZPVB0JJOrI2pl9M7eytzVtnyEetEu0ssLI1IUzYN2nR6GmRMpioreSqqhZ70afsiqeRvT0I3bXHk1xGZlETqPnmUAAAAAAAAAAACwLwudb56ySOpr2OrEZyc2qxYbDwGGhbthXi5P2sWyPS2s7xNXo3ahXsaKEcnGsPs0OEOt9j7Bd1kdmax1Yh8c3diVdn0i9Oiz2exGfvO21K5OiJpRFjvmD1TXvK1L06eRyGTlPwDfTac7RdAniTMepzPOp1m7OCGqkcrq9Ym84bC3gj3QPzmw2DrqbB61+BYK/WlimzPKeftu70cojFZLa6FY3aOrpVd0d9eN+4fqWbtUpmfGptE/XbPtedj2jfuTLgAAAACA0L0Cj3Bj/vQnoRUAAAAASUVORK5CYII=" alt="menu"/>
        <img className="h-8" src="data:image/png;base64,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" alt="logo"/>
        </div>
        <div className='col-span-10 text-justify mx-2'>
          <div>
            <input className='border w-1/2 p-2 border-gray-400 rounded-l-full' value={searchQuery} onChange={(e)=>SetsearchQuery(e.target.value)} onBlur={()=>Setshowseggestion(false)} onFocus={()=>Setshowseggestion(true)} type="text"></input>
            <button className='border-gray-400 border p-2 rounded-r-full'>Search</button>
            </div>
            {showseggestion && <div className='fixed px-2 w-[33rem] rounded-lg shadow-lg bg-white'>
              <ul>
                {seggestion.map((s)=>(
                  <li className="shadow-sm py-2" key={s}>{s}</li>
                ))}
                
               
              </ul>
            </div>}
        </div>
        <div className='col-span-1'>
        <img className='h-8' src="data:image/png;base64,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"/>
        </div>      
    </div>
    
  )
}

export default Head