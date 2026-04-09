import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ChatPage from './pages/ChatPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path='/chat-page' element={<ChatPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App