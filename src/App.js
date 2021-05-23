import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCryptoPrices } from './features/price/priceSlice';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.price);

  useEffect(() => {
    dispatch(getCryptoPrices());
  }, [dispatch]);

  return (
    <section className="container">
      <div className="wave">
        <div className="panel">
          {data?.success ? (
            <>
              <p>Data retrieved</p>
              <p>Target: {data.target}</p>
              {Object.entries(data.rates).map((rate) => (
                <p key={rate[0]}>
                  <strong>{rate[0]}</strong>: {rate[1]}
                </p>
              ))}
            </>
          ) : (
            <p>Issue fetching data...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
