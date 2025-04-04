import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../config';

async function getGoods() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const fetchGoods = createAsyncThunk(
  'shop/fetchGoods',
  async (_, thunkAPI) => {
    try {
      const response = await getGoods();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState: { 
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.shop;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default shopSlice.reducer;