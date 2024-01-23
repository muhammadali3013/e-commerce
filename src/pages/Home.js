import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div><div className="header"><marquee className="mt-3"><p>Lorem Ipsum is simply dummy 
    text of the printing and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown printer took a 
    galley of type and scrambled it to make a type specimen book. </p></marquee></div>
  
      
<div className=" styles_contentGrid__TmHSu " bis_skin_checked={1}>
  
  <img alt='' className='mb-4' src="https://res.cloudinary.com/stitch-fix/image/upload/dpr_auto,f_auto,q_auto/v1702934212/landing-pages/pages/US/men/Style%20Forecast%2024/231130_StyleForecast_M__PRODUCT.jpg"
  style={{width: '98vw', height: '83vh'}} />
</div>

      <hr/>
        <main>
  

  {/* Marketing messaging and featurettes
  ================================================== */}
  {/* Wrap the rest of the page in another container to center all the content. */}
  <div className="container marketing mt-5" bis_skin_checked={1}>
    {/* Three columns of text below the carousel */}
    <div className="row" bis_skin_checked={1}>
      <div className="col-lg-4 " bis_skin_checked={1}>
      
      <img src="./images/rounded-image1" className="rounded-carousel" alt="" />
     
        <h2 className="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><Link to="/products" className="btn btn-secondary" href="#">View details »</Link></p>
      </div>{/* /.col-lg-4 */}
      <div className="col-lg-4" bis_skin_checked={1}>
      <img src="./images/rounded-image2" className="rounded-carousel" alt="" />
        <h2 className="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><Link to="/products"className="btn btn-secondary" href="#">View details »</Link></p>
      </div>{/* /.col-lg-4 */}
      <div className="col-lg-4" bis_skin_checked={1}>
      <img src="./images/rounded-image3" className="rounded-carousel" alt="" />
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><Link to="/products" className="btn btn-secondary" href="#">View details »</Link></p>
      </div>{/* /.col-lg-4 */}
    </div>{/* /.row */}


    
    {/* START THE FEATURETTES */}
    <hr className="featurette-divider" />
    <div className="row featurette" bis_skin_checked={1}>
      <div className="col-md-7 FEATURETTES-css " bis_skin_checked={1}>
        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        <button className="btn btn-primary d-inline-flex align-items-center px-5 py-2 FEATURETTES-btn" type="button">
  Buy Now &gt;
</button>

      </div>
      <div className="col-md-5" bis_skin_checked={1}>
      <img src="./images/FEATURETTES-img1" className='FEATURETTES-img'  alt="" />
 </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette" bis_skin_checked={1}>
      <div className="col-md-7 order-md-2 FEATURETTES-css" bis_skin_checked={1}>
        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
       <button className="btn btn-primary FEATURETTES-btn d-inline-flex align-items-center px-5 py-2" type="button">
  Buy Now &gt;
</button>

      </div>
      <div className="col-md-5 order-md-1" bis_skin_checked={1}>
      <img src="./images/FEATURETTES-img2"  className='FEATURETTES-img'  alt="" />
 </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette" bis_skin_checked={1}>
      <div className="col-md-7 FEATURETTES-css" bis_skin_checked={1}>
        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        <button className="btn btn-primary FEATURETTES-btn d-inline-flex align-items-center px-5 py-2" type="button">
  Buy Now &gt;
</button>

      </div>
      <div className="col-md-5" bis_skin_checked={1}>
      <img src="./images/FEATURETTES-img3"   className='FEATURETTES-img' alt="" />
 </div>
    </div>
    <hr className="featurette-divider" />
   
  </div>
  
 
</main>
      
    </div>
  )
}

export default Home
