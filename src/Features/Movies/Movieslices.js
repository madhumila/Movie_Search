import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/MovieApiKeys";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {

    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsycShows",
  async (term) => {

    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      console.log("My payload is", payload);
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});
export const { removeSelectedMovieShow } = movieSlice.actions;

export default movieSlice.reducer;
