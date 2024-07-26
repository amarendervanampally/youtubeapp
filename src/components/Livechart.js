import React, { useEffect, useState } from 'react'
import Chartmessage from './Chartmessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/Chartslice';
import store from '../utils/store';
import { generateRandomName, randomeMessage } from '../utils/helper';

const Livechart = ()=> {
  const [livemessage,setLivemessage] = useState("");
    const dispatch = useDispatch();
    const chartMessages = useSelector((store)=>store.chat.messages);
    useEffect(()=>{
       const i = setInterval(()=>{
       console.log("API Poling");
       dispatch(addMessage({
        name : generateRandomName(),
        message : randomeMessage(10)
       }))
        },2000);
        return()=> clearInterval(i)
    },[])
  return (
    <div className='w-full rounded-lg px-5 h-{600px} ml-2'>
   {chartMessages.map((c,i) => (
    <Chartmessage name={c.name} key={c.i}  message={c.message}/>
))}
   <form onSubmit={(e)=>{
    console.log("form submit");
    e.preventDefault();
    dispatch(
      addMessage({
        name:"Amar",
        message : livemessage
      })
    )
   }}>
    <div>
      <input type="text" className='border-black' value={livemessage} onChange={(e)=>setLivemessage(e.target.value)} />
      <button className='bg-slate-50'>send</button>
    </div>
    </form>

    </div>
    
    
  )
}

export default Livechart;