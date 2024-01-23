import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const [productsappi, setProductsappi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api();
  }, []);

  const Api = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setProductsappi(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const handleSubmit = () => {

   
    navigate('/Product');
  };

  return (
    <div>
      <h1>Products</h1>
      <hr />
      {loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
      <div className="container">
  <div className="row">
    {productsappi.map((value) => (
      
        <div className="card mb-4  d-flex flex-column  col-md-4 product-card" key={value.id} >
          <img
            className="bd-placeholder-img card-img-top"
            height={260}
            src={value.image}
            alt={value.title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{value.title.slice(0, 50)}...</h5>
            <p className="card-text">{value.description.slice(0, 100)}...</p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p className="card-text mt-1">${value.price}</p>
              
              <Link to={`/Product/${value.id}`}><button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>
                Buy Now
              </button></Link>
       
            </div>
          </div>
        </div>
   
    ))}
  </div>
</div>)}

    </div>
  );
};

export default Products;
