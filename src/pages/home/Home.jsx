import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { AiOutlineSearch } from 'react-icons/ai';
import Navbar from '../../components/navbar/Navbar';
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <div className="home-container container">
        <Navbar title="Crypto Statistics" handleSearch={handleSearch} search={search} />
        <div className="home-wrapper">
          <h1 className="title">Cryptocurrency Statistics</h1>
          <div className="crypto-desc">
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
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name, symbol or rank"
              className="search"
              onChange={handleSearch}
              value={search}
            />
            <AiOutlineSearch className="search-icon" />
          </div>
          <div className="spinner">
            {isError && <h1>{isError}</h1>}
          </div>
          {loading
            ? <ClipLoader color="#d0021b" loading={loading} size={150} />
            : (
              <>
                <h2 className="crypto-container-title">Top 100 Cryptocurrencies</h2>
                <div className="card-container">
                  {filteredCoins.map((coin) => (
                    <Card
                      key={coin.id}
                      coin={coin}
                    />
                  ))}
                </div>
              </>
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;
