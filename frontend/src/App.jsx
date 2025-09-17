// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<h1>Courses</h1>} />
        
      </Routes>
      <Footer />



    </>
  )
}

export default App
