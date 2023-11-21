import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchForBooks } from "../../api/constants";

const initialState = {
  books: [],
  loading: false,
  error: null,
};
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const booksUrl = searchForBooks(searchQuery);
      const response = await axios.get(booksUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export const { clearBooks } = booksSlice.actions;
export default booksSlice.reducer;
