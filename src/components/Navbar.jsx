import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-20 py-8 bg-blue-50'>
        <div>
            <h1 className='text-4xl font-bold text-blue-600'>ISMT Chat</h1>
        </div>

        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-6 text-xl font-medium text-gray-600'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-400 cursor-pointer'>Chat Page</button>
        </div>
    </header>
  )
}

export default Navbar