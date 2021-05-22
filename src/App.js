import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getCryptoPrices } from './features/price/priceSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(getCryptoPrices())}>
        Fetch data
      </button>
    </div>
  );
}

export default App;
