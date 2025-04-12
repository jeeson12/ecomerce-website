import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Collection from './pages/collection'
import Cart from './pages/cart'
import Login from './pages/login'
import Orders from './pages/orders'
import Placeorder from './pages/placeorder'
import Product from './pages/product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div classname='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="placeorder" element={<Placeorder/>}/>
        <Route path="/product/:productid" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App