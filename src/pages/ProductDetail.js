import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState({});
  

  useEffect(() => {
    ApiId();
  }, []);

  const ApiId = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await response.json();
      setProductId(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const singleProduct = () => {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    cartProducts.push(productId);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  };

  return (

    <div>
      <div className='row mb-3 '>
        <div className='col-2'>
      <Link to="/Products">
              <button type="button" className="btn btn-secondary mt-3  rounded fw-bold fs-larger justify-content-start ">
               &lt; back page
              </button></Link>
              </div>
              <div className='col-10'>
      <h1>Product detail page</h1></div>
      
              </div>
      <div className='container'>
     <div className="row featurette" bis_skin_checked={1}>
  <div className="col-md-5" bis_skin_checked={1}>
  

      <img
            className="bd-placeholder-img card-img-top"
            height={450}
            src={productId.image}
            alt={productId.title}
          /></div>
           <div className="col-md-7  p-5" bis_skin_checked="1">
        <h2 className="featurette-heading  mt-4">{productId.title} <span class="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">{productId.description}</p>
        <div className='row'><div className='col-6'>
          <h4 className=" text-warning mt-3 me-5"><i className="bi bi-star-fill">Rating : 4.77 </i></h4>
        </div><div className='col-6'>
        <h1 className="featurette-heading text-danger">Price : $ {productId.price}/-</h1>
       

        
              </div></div>
              <Link to="/Add-to-cart">
        <button
          type="button"
          className="btn btn-secondary mt-5 p-3 rounded fw-bold fs-larger"
          onClick={singleProduct}
        >
          Add to cart
        </button>
      </Link>
      <Link to="/Add-to-cart">
        <button
          type="button"
          className="btn btn-primary mt-5 p-3 fw-bold fs-larger mx-2"
        >
          Buy Now
        </button>
      </Link>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ProductDetail
