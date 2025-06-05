import React from 'react';
import { useNavigate } from 'react-router-dom';
import corousal from '../assets/corousal.jpg';
import corousal2 from '../assets/corousal2.jpg';
import corousal3  from '../assets/corousal3.jpg';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div
      className="container py-5"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(90deg,rgb(91, 104, 216) 0%, #beb8f3 100%)',
        color: '#333',
        borderRadius: '15px'
      }}
    >
      {/* Bootstrap Carousel */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img
             src={corousal}      className="d-block w-100"
              alt="Banking Services"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={corousal2}     className="d-block w-100"
              alt="Digital Banking"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={corousal3}    className="d-block w-100"
              alt="Secure Transactions"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold">Welcome to iBank</h1>
        <p className="lead">
          Your trusted partner in<strong>Secure </strong>  online{' '}
         <strong>Banking</strong>  experience.
        </p>
        <button
          className="btn btn-primary btn-lg mt-3 shadow"
          onClick={handleGetStarted}
          style={{ minWidth: '180px', fontWeight: '600' }}
        >
          Get Started
        </button>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
            <img src={card1} className="card-img-top" alt="Easy Account Management"style={{ height: '250px', objectFit: 'cover' }}/>
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
             <img
  src={card2}
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
           <img
  src={card3}
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
      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-0">&copy; {new Date().getFullYear()} iBank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
