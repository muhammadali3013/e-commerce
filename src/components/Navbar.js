import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/Login-page');
  };

  const handleLogout = () => {
    localStorage.removeItem('islogin');
    setIsLoggedIn(false);
  };

  return (
    <div className='navbar-css bg-light'>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom mx-5 ">
        <Link to="/" className="d-flex align-items-center col-md-3  mb-md-0  text-decoration-none text-danger">
          <h1 className='fw-bolder'>Ecommerce</h1>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-dark fw-bold fs-larger"><h5>Home</h5></Link></li>
          <li><Link to="/products" className="nav-link px-2 link-dark fw-bold "><h5>Products</h5></Link></li>
          <li><Link to="/About" className="nav-link px-2 link-dark fw-bold"><h5>About us</h5></Link></li>
          <li><Link to="/ContactUs" className="nav-link px-2 link-dark fw-bold"><h5>Contact-Us</h5></Link></li>
          <li><Link to="/About" className="nav-link px-2 link-dark fw-bold"><h5>About us</h5></Link></li>
        </ul>

        <div className="col-md-3 text-end" bis_skin_checked={1}>
          <Link to="/Add-to-cart">
            <Icon icon="icomoon-free:cart" color="#d50000" width="35" height="35" className='me-4' />
          </Link>
          {isLoggedIn ? (
            <>
              
              <button type="button" className="btn btn-dark" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-dark me-2" onClick={handleLogin}>Login</button>
              
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
