import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/home/Home';

describe('Test for Home Page', () => {
  test('renders Home page without crashing', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
  test('Renders texts on Home page without crashing', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(home.getByText('Cryptocurrency Statistics')).toBeInTheDocument();
    expect(home.getByText('Market Cap')).toBeInTheDocument();
    expect(home.getByText('24h Volume')).toBeInTheDocument();
  });
});
