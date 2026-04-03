import React, { useState } from 'react'

const Features = () => {

    const [number, setNumber] = useState(1)

  return (
    <section className='px-20 py-16'>
        <div>
            <h2 className='text-4xl font-bold text-center mb-8'>Features {number}</h2>

            <button onClick={()=>{setNumber(number+1)}}>add</button>
        </div>

        <div className='grid grid-cols-3 gap-6'>
            <div className='border border-gray-200 rounded-lg p-6 shadow-xl shadow-blue-500/20'>
                <h3 className='text-xl font-semibold mb-4'>Real Time Response</h3>
                <p className='text-lg font-medium text-gray-600'>Get instant feedback on your actions and decisions.</p>
            </div>
            <div className='border p-6'>
                <h3 className='text-xl font-semibold mb-4'>Advanced Analytics</h3>
                <p  className='text-lg font-medium text-gray-600'>Gain insights from your data with our powerful analytics tools.</p>
            </div>
            <div className='border p-6'>
                <h3 className='text-xl font-semibold mb-4'>Personalized Experience</h3>
                <p className='text-lg font-medium text-gray-600'>Enjoy a tailored experience that adapts to your needs and preferences.</p>
            </div>
        </div>
    </section>
  )
}

export default Features