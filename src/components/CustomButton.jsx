import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-400 cursor-pointer'>{text}</button>
  )
}

export default CustomButton