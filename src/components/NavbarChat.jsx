import React from 'react'
import CustomButton from './CustomButton'

const NavbarChat = () => {
  return (
    <header className='px-20 py-6 flex items-center justify-between'>
        <div>
            <h1 className='text-xl font-semibold'>ISMT Chat</h1>
        </div>
        <div>
            <CustomButton text="Clear Chat" />
        </div>
    </header>
  )
}

export default NavbarChat