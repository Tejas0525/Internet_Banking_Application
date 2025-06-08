import React from 'react';

function AboutUs() {
  return (
    <div>
      <img
        src="/assets/team.jpg"
        className="card-img-top"
        alt="Team"
        style={{ height: '650px', objectFit: 'cover' }}
      />

      <h2 className="text-center mt-4">About Our Team</h2>
      <p className="text-center">
        <strong>
          We are students of PG-Diploma in Advanced Computing from CDAC Mumbai,
          who developed an Internet Banking website.
        </strong>
      </p>
      <h3 className="text-center">Details of Team Members</h3>
      <hr className="mb-4" />

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
            <img
              src="/assets/jayashri.jpg"
              className="card-img-top"
              alt="Jayashri"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Jayashri Dadmal</h5>
              <p className="card-text">
                Email: jayashri2015d@gmail.com
                <br />
                Role: FrontEnd Developer
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
            <img
              src="/assets/shwetaSherkar.jpg"
              className="card-img-top"
              alt="Shweta"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Shweta Sherkar</h5>
              <p className="card-text">
                Email: shweta.sherkar21@gmail.com
                <br />
                Role: FrontEnd Developer
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card text-dark bg-light h-100 shadow-sm">
            <img
              src="/assets/TejasPatil.jpg"
              className="card-img-top"
              alt="Tejas"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Tejas Patil</h5>
              <p className="card-text">
                Email: patiltejas814@gmail.com
                <br />
                Role: BackEnd Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} iBank. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default AboutUs;
