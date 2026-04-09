import React from 'react'

const Hero = () => {
    return (
        <section className='flex items-center justify-center h-[600px]  relative'>
            <div className='w-1/2 mx-auto text-white text-center'>
                <h1 className='text-5xl font-bold mb-4'>Solve your query with ISMT Chat</h1>
                <p className='text-lg  mb-8'>
                    ISMT Chat is an AI-powered chatbot that can help you with a wide range of queries. Whether you need help with your homework, want to learn a new skill, or just want to have a conversation, ISMT Chat is here to help.
                </p>
                <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-400 cursor-pointer'>Get Started</button>
            </div>

            <div className='absolute -z-20 w-full h-150 overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chat" className='w-full' />
            </div>

            <div className="h-150 w-full absolute bg-black opacity-40 -z-10"></div>
        </section>
    )
}

export default Hero