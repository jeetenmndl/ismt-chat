import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from './CustomButton';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className='flex items-center justify-between px-20 py-8 bg-blue-50/50'>
            <div>
                <h1 className='text-4xl font-bold text-blue-600'>ISMT Chat</h1>
            </div>

            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-6 text-xl font-medium text-gray-600'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div onClick={() => { navigate("/chat-page") }}>
                    <CustomButton text="Chat Page" />
                </div>
            </div>
        </header>
    )
}

export default Navbar