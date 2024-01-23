import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartProducts')) || []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    if (newQuantity >= 0) {
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
      localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    }
  };
  

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className='row mb-3 '>
        <div className='col-2'>
          <Link to="/Products">
            <button type="button" className="btn btn-secondary mt-3 rounded fw-bold fs-larger justify-content-start ">
              &lt; back page
            </button>
          </Link>
        </div>
        <div className='col-10'>
          <h1>Product detail page</h1>
        </div>
      </div>
      <div className="container" bis_skin_checked={1}>
        <div className="row mb-5" bis_skin_checked={1}>
          {cart &&
            cart.map((value, index) => (
              <form className="col-md-12" method="post" key={index}>
                <div className="site-blocks-table " bis_skin_checked={1}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <img
                            className="bd-placeholder-img "
                            height={90}
                            width={90}
                            src={value.image}
                            alt={value.title}
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{value.title.slice(0, 10)}</h2>
                        </td>
                        <td>${value.price}</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }} bis_skin_checked={1}>
                            <div className="input-group-prepend" bis_skin_checked={1}>
                              <button className="btn btn-outline-black decrease" type="button" onClick={() => updateQuantity(index, (value.quantity || 1) - 1)}>-</button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              value={value.quantity || 1}
                              readOnly
                            />
                            <div className="input-group-append" bis_skin_checked={1}>
                              <button className="btn btn-outline-black increase" type="button" onClick={() => updateQuantity(index, (value.quantity || 1) + 1)}>+</button>
                            </div>
                          </div>
                        </td>
                        <td>${(value.price * value.quantity) || 0}</td>
                        <td><button className="btn btn-black btn-sm" onClick={() => removeFromCart(index)}>Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            ))}
        </div>
        <div className="row" bis_skin_checked={1}>
          <div className="" bis_skin_checked={1}>
            <Link to="/Products">
              <button className="btn btn-dark">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;






