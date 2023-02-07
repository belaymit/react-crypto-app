import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import Navbar from '../navbar/Navbar';
import '../../styles/details.scss';

const Details = () => {
  const { id } = useParams();
  const coins = useSelector((state) => state.coin.coins);
  const coin = coins.find((coin) => coin.id === id);

  return (
    <section>
      <Navbar title={<MdArrowBackIosNew />} />
      <div className="details-container container">
        <div className="details-header">
          <img src={coin.icon} alt="coin" />
          <h2>
            <span>
              #
              {coin.rank}
            </span>
            {' '}
            {coin.name}
          </h2>
        </div>
        <div className="card-detail">
          <div className="card-description">
            <p className="card-title card-sub-header">Name</p>
            <p className="card-value card-sub-header">{coin.name}</p>
          </div>
          <div className="card-description">
            <p className="card-title">Symbol</p>
            <p className="card-value">{coin.symbol}</p>
          </div>
          <div className="card-description">
            <p className="card-title">Price in USD</p>
            <p className="card-value">
              $
              {coin.price.toFixed(2)}
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Price in BTC</p>
            <p className="card-value">
              {coin.priceBtc.toFixed(2)}
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Volume</p>
            <p className="card-value">
              {coin.volume.toFixed(2)}
              B
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Market CAP</p>
            <p className="card-value">
              {coin.marketCap.toFixed(2)}
              B
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Available Supply</p>
            <p className="card-value">{coin.availableSupply}</p>
          </div>
          <div className="card-description">
            <p className="card-title">Total Supply</p>
            <p className="card-value">{coin.totalSupply}</p>
          </div>
          <div className="card-description">
            <p className="card-title">Price change in 1hr</p>
            <p className={coin.priceChange1h > 0 ? 'card-value positive' : 'card-value negative'}>
              {coin.priceChange1h}
              %
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Price change in one day </p>
            <p className={coin.priceChange1d > 0 ? 'card-value positive' : 'card-value negative'}>
              {coin.priceChange1d}
              %
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Price change in one Week </p>
            <p className={coin.priceChange1w > 0 ? 'card-value positive' : 'card-value negative'}>
              {coin.priceChange1w}
              %
            </p>
          </div>
          <div className="card-description">
            <p className="card-title">Website </p>
            <a href={coin.websiteUrl} target="_blank" rel="noreferrer" className="card-title link">Visit</a>
          </div>
          <div className="card-description">
            <p className="card-title">Twitter </p>
            <a href={coin.twitterUrl} target="_blank" rel="noreferrer" className="card-title link">Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
