import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './Components/Pricing';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route 
            index
            element={<Homepage />}
          />

          <Route 
            path="/pricing"
            element={<Pricing />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
