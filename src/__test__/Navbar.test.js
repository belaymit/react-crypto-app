import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import store from '../redux/configureStore';

describe('Test for Navbar component', () => {
  it('renders navbar without crashing', () => {
    const handleSearch = jest.fn();
    const search = 'search';

    const navbar = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar title="" search={search} handleSearch={handleSearch} />
        </Provider>
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });

  it('renders Navbar with expected text', () => {
    const navbar = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar title="Crypto Statistics" />
        </Provider>
      </BrowserRouter>,
    );
    expect(navbar.getByText('Crypto Statistics')).toBeInTheDocument();
  });
});
