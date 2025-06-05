import React from 'react';
import TejasPatil from '../assets/TejasPatil.jpg';
import shwetaSherkar from '../assets/shwetaSherkar.jpg';
import Jayashri from '../assets/Jayashri.jpg';
import team from '../assets/team.jpg';

function AboutUs() {
  return (
    <div>
       <img src={team} className="card-img-top" alt="Team"style={{ height: '550px', objectFit: 'cover' }}/>
      
      <h2  className="text-center mt-4">About Our Team</h2>
      <p className="text-center">
  <strong>
    We are students of PG-Diploma in Advanced Computing from CDAC Mumbai,
    who developed an Internet Banking website.
  </strong></p>
    <h3 className="text-center">Details of Team Members</h3>
    <hr className="mb-4" />
       {/* Card 1 */}
       <div className="row g-4">



        
              <div className="col-md-4">
                <div className="card text-dark bg-light h-100 shadow-sm">
                  <img src={Jayashri} className="card-img-top" alt="Tejas"style={{ height: '350px', objectFit: 'cover' }}/>
                  <div className="card-body">
                    <h5 className="card-title">Jayashri Dadmal</h5>
                    <p className="card-text">Email  : jayashri2015d@gmail.com<br/>Role    : FrontEnd Devloper</p>
                
                  </div>
                </div>
              </div>
      
              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card text-dark bg-light h-100 shadow-sm">
                   <img
        src={shwetaSherkar}
        className="card-img-top"
        alt="Shweta"
        style={{ height: '350px', objectFit: 'cover' }}
      />
      
                  <div className="card-body">
                    <h5 className="card-title">Shweta Sherkar</h5>
                    <p className="card-text">Email  : shwetasherkar@gmail.com<br/>Role    : FrontEnd Devloper</p>
                  </div>
                </div>
              </div>
      
              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card text-dark bg-light h-100 shadow-sm">
                 <img
        src={TejasPatil}
        className="card-img-top"
        alt="Secure Transactions"
        style={{ height: '350px', objectFit: 'cover' }}
      />
      
                  <div className="card-body">
                    <h5 className="card-title">Tejas Patil</h5>
                    <p className="card-text">Email  : tejaspatil@gmail.com<br/>Role    : BackEnd Devloper</p>
                  </div>
                </div>
              </div>
     {/* Footer */}
      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-0">&copy; {new Date().getFullYear()} iBank. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default AboutUs;
