import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'homeSlice/getProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        let allProducts = await response.json();
        return allProducts;   // Ensure this matches the correct path
    }
);

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        status: 'idle',
        products: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;  // Correctly set products from the payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default homeSlice.reducer;
