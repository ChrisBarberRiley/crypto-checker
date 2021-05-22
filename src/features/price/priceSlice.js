import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const getCryptoPrices = createAsyncThunk(
  'price/getCryptoPrices',
  async () => {
    const res = await fetch(
      `http://api.coinlayer.com/api/live?access_key=${API_KEY}`,
    );
    const data = await res.json();

    return data;
  },
);

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
  extraReducers: {
    [getCryptoPrices.pending]: (state) => {
      state.loading = true;
    },
    [getCryptoPrices.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getCryptoPrices.error]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default priceSlice.reducer;
