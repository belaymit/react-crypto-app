import React from 'react';
import '../../styles/footer.scss';

const Footer = () => (
  <footer>
    <div className="footer-container container">
      <div className="footer">
        <div className="row">
          <div className="col">
            <h4>Crypto App</h4>
            <h3 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Adama, Ethiopia</li>
              <li>XYZ Street, South East</li>
            </h3>
          </div>
          <div className="col">
            <h4>Crypto</h4>
            <ul className="list-unstyled">
              <li>Binance</li>
              <li>Ethereum</li>
              <li>Crypto</li>
            </ul>
          </div>
          <div className="col">
            <h4>Crypto stats</h4>
            <ul className="list-unstyled">
              <li>Binance</li>
              <li>Ethereum</li>
              <li>Crypto</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row-sm">
        <p className="col-sm">
          &copy;
          {new Date().getFullYear()}
          {' '}
          Crypto App | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
