import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className='px-5 bg-gray-400 m-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button