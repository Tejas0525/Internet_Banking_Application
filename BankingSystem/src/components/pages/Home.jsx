import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/admin-login');
  };

  return (
    <div className="container-fluid p-0">

      {/* Hero Section with Carousel and Overlay */}
      <div className="position-relative">
        <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel" data-bs-interval="1000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/banks1.jpg"
                className="d-block w-100"
                alt="Banking Services"
                style={{ height: '90vh', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/central-banks.jpg"
                className="d-block w-100"
                alt="Digital Banking"
                style={{ height: '90vh', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/bank2.jpg"
                className="d-block w-100"
                alt="Secure Transactions"
                style={{ height: '90vh', objectFit: 'cover' }}
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{backgroundColor:'transparent',borderColor:'white'}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{backgroundColor:'transparent',borderColor:'white'}}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Overlay Content */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white" style={{ backgroundColor: 'rgba(0,0,0,0.4)',paddingTop: '20px' }}>
          <h1 className="display-3 fw-bold text-center">Welcome to iBank</h1>
          <p className="lead text-center">
            Your trusted partner in <strong>Secure</strong> online <strong>Banking</strong> experience.
          </p>
          <button
            className="btn btn-primary btn-lg mt-2 shadow"
            onClick={handleGetStarted}
            style={{ width:'25%',fontSize: '0.9rem',
        padding: '6px 12px',
        fontWeight: 600,
        minWidth: '100px', }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Cards Section */}
   
   <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
            <img src="/assets/card1.jpg" className="card-img-top" alt="Easy Account Management"style={{ height: '250px', objectFit: 'cover' }}/>
            <div className="card-body">
              <h5 className="card-title">Easy Account Management</h5>
              <p className="card-text">Open and manage your accounts seamlessly with just a few clicks.</p>
              <span className="badge bg-primary">Convenient</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
             <img src="/assets/card2.jpg"
  className="card-img-top"
  alt="24/7 support"
  style={{ height: '250px', objectFit: 'cover' }}
/>

            <div className="card-body">
              <h5 className="card-title">24/7 Support</h5>
              <p className="card-text">We’re here whenever you need help with your banking needs.</p>
              <span className="badge bg-info">Reliable</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
           <img src="/assets/card3.jpg"
  className="card-img-top"
  alt="Secure Transactions"
  style={{ height: '250px', objectFit: 'cover' }}
/>

            <div className="card-body">
              <h5 className="card-title">Secure Transactions</h5>
              <p className="card-text">Your safety is our priority — all transactions are encrypted end-to-end.</p>
              <span className="badge bg-danger">Trusted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-4 py-4 border-top bg-white">
        <p className="mb-0">&copy; {new Date().getFullYear()} iBank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
