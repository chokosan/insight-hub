import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Singleblog from './Pages/Singleblog'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
 import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard'
  

const App = () => {
  return (
    <div className='max-w-full mx-auto'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/blog/:id' element={<Singleblog/>}/>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App

