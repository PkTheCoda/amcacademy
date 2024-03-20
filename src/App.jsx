import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './Components/Pricing';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Book from './Pages/Book';


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

          <Route 
            path="/book"
            element={<Book />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
