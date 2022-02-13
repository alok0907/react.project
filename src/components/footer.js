import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/*column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>About Us</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
          {/*column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>About Us</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
          {/*column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>About Us</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
          {/*column 4 */}
          <div className="col-md-3 col-sm-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>About Us</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-bottom">
        <p className="text-xs-center">
          &copy;Veleto {new Date().getFullYear()} - All Rights Reserved 
        </p>
        </div>
      </div>      
    </div>
  )
}