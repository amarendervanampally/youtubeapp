import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuopen = useSelector((store)=>store.app.isMenuopen);

    if(!isMenuopen){
        return null;
    }
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shorts">Shorts</Link></li>

        </ul>
      <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        </ul>
        <h1 className='font-bold'>Watch You Later</h1>
        <ul>
            <li>Movies</li>
            <li>Clips</li>
        </ul>  
    </div>
  )
}

export default Sidebar