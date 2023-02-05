import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
// import { Spinner } from 'loading-animations-react';
import { cryptoDisplay } from '../../assets/file';
import Card from '../../components/UI/Card';
import {
  allCoins, error, getCoins,
} from '../../redux/feature/coinSlice';
import '../../styles/home.scss';

let flag = false;

const Home = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  const coins = useSelector(allCoins);
  // const loading = useSelector(isLoading);
  const isError = useSelector(error);

  useEffect(() => {
    if (!flag) {
      dispatch(getCoins());
      flag = true;
    }
  }, [dispatch]);

  const filteredCoins = coins ? coins.filter(
    (coin) => coin.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
              || coin.symbol.toLowerCase().includes(search.toLowerCase()),
      ) || coin.rank.toString().includes(search.toString()),
  ) : [];

  return (
    <main className="home-container container">
      <Navbar title="Crypto Statistics" handleSearch={handleSearch} search={search} />
      <div className="home-wrapper">
        <h1 className="title">Cryptocurrency Statistics</h1>
        <div className="crypto-desc">
          <div className="crypto-data-img">
            <img src={cryptoDisplay} alt="logo" />
          </div>
          <div className="crypto-data-card">
            <h2 className="crypto-data-card-title">Market Cap</h2>
            <p>
              {coins[0]?.marketCap}
              {' '}
              B
            </p>
          </div>
          <div className="crypto-data-card">
            <h2 className="crypto-data-card-title">24h Volume</h2>
            <p>
              {coins[0]?.volume}
              {' '}
              B
            </p>
          </div>
        </div>
      </div>
      <div className="crypto-container">
        <h2 className="crypto-container-title">Top 100 Cryptocurrencies</h2>
        <div className="loading-status">
          {/* {loading && <Spinner />} */}
          {isError && <h1>{isError}</h1>}
        </div>
        <div className="card-container">
          {filteredCoins.map((coin) => (
            <Card
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
