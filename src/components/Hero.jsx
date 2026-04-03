import React from 'react'

const Hero = () => {
    return (
        <section className='flex items-center justify-center h-[600px] px-20'>
            <div>
                <h1 className='text-5xl font-bold mb-4'>Solve your queries with ISMT Chat</h1>
                <p className='text-lg text-gray-600 mb-8'>
                    ISMT Chat is an AI-powered chatbot that can help you with a wide range of queries.
                </p>
                <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-400 cursor-pointer'>Get Started</button>
            </div>
        </section>
    )
}

export default Hero