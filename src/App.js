import './App.css';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
// import {  useEffect, useState,  } from 'react';
import ProductDetail from './pages/ProductDetail';
import AddToCart from './pages/AddToCart';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';


function App() {
 
  const islogin = localStorage.getItem('islogin' , true);
 
  return (

    <div className="App">


      <BrowserRouter>
      
       <Navbar  localdata={islogin}/>
       
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Login-page" element={<Login/>} />
          <Route path="/Product/:id" element={<ProductDetail/>} />
          <Route path="/Add-to-cart" element={<AddToCart/>} />
        </Routes>
        <hr/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
