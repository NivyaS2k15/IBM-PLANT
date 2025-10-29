import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch plant data
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const result = await axios.get("https://perenual.com/api/v2/species-list?key=sk-fsdY6901cead9470513183");
  sessionStorage.setItem("allproducts", JSON.stringify(result.data.data));
  return result.data.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    allproducts: [],
    dummyALlProducts: [],
    loading: false,
    errorMsg: ""
  },
  reducers: {
    searchProduct: (state, action) => {
      state.allproducts = state.dummyALlProducts.filter(item =>
        item.common_name?.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.errorMsg = "";
        state.allproducts = [];
        state.dummyALlProducts = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMsg = "";
        state.allproducts = action.payload;
        state.dummyALlProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.errorMsg = "API call failed";
        state.allproducts = [];
        state.dummyALlProducts = [];
      });
  }
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;