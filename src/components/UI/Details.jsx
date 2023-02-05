import React from 'react';
import { logo } from '../../assets/file';
import '../../styles/details.scss';

const Details = () => (
  <section>
    <div className="details-container container">
      <div className="details-header">
        <img src={logo} alt="coin" />
        <h2>
          <span>
            #
            76
          </span>
          Crypto Coin
        </h2>
      </div>
      <div className="card-detail">
        <div className="card-body-detail">
          <p className="card-title">Name</p>
          <p className="card-title">  Crypto Coin</p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Symbol</p>
          <p className="card-title">$</p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Price to USD</p>
          <p className="card-title">
            $
            22
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Price in Btc</p>
          <p className="card-title">
            45
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Volume</p>
          <p className="card-title">
            60
            B
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Market CAP</p>
          <p className="card-title">
            50
            B
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Available Supply</p>
          <p className="card-title">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Total Supply</p>
          <p className="card-title">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Price change in 1hr</p>
          <p className="card-title">
            80
            %
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Price change in 1 day: </p>
          <p className="card-title">
            90
            %
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Price change in 1 week: </p>
          <p className="card-title">
            30
            %
          </p>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Website: </p>
          <a href="/" target="_blank" rel="noreferrer" className="card-title">Visit</a>
        </div>
        <div className="card-body-detail d-flex">
          <p className="card-title">Twitter: </p>
          <a href="/" target="_blank" rel="noreferrer" className="card-title">Visit</a>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
