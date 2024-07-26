import React from 'react'

const Shorts = ()=> {
  return (
    <div>Shorts

        <form>
            <input type="text" name="name" className='border' placeholder='name' value=""/>
            <input type="password" name="password" className='border' placeholder='password'/>
            <button className='bg-slate-100 px-3'>submit</button>

        </form>
    </div>
  )
}

export default Shorts