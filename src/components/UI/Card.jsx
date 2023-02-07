import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineArrowUpward } from 'react-icons/md';
import { AiOutlineArrowDown } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const Card = ({ coin }) => (
  <Link to={`/coins/${coin.id}`}>
    <div className="crypto-card">
      <div className="crypto-wrapper" key={coin.id}>
        <div className="crypto-card-header">
          <h2 className="rank-name">
            {coin.rank}
            {'. '}
            {coin.name}
          </h2>
          <img src={coin.icon} alt={coin.name} />
        </div>
        <div className="card-body">
          <div className="card-body-item">
            <p className="items">
              Symbol
            </p>
            <p>
              {coin.symbol}
            </p>
          </div>
          <div className="card-body-item">
            <p className="items">
              Price
            </p>
            <p>
              $
              {Math.round(coin.price * 100) / 100}
            </p>
          </div>
          <div className="card-body-item">
            <p className="items">
              Daily Change
            </p>
            <div className="daily-change-container">
              <p className={Number(coin.priceChange1d) > 0 ? 'daily-change-positive' : 'daily-change-negative'}>
                {coin.priceChange1d}
                %
              </p>
              <span>
                {Number(coin.priceChange1d) > 0
                  ? <MdOutlineArrowUpward className="daily-change-positive" />
                  : <AiOutlineArrowDown className="daily-change-negative" />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceChange1d: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
