import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='text-2xl'>{props.name}</button>
    </div>
  )
}

export default Button
