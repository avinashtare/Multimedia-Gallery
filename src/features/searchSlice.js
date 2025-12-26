import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaAPI";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    data: [],
    loading: false,
    error: null,
    tabs: ["photos", "gif", "videos"],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.data = [];
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //  PHOTOS
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "Failed to fetch photos";
      })

      //  VIDEOS
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.videos;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "Failed to fetch videos";
      })

      //  GIFS
      .addCase(fetchGIF.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGIF.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
      })
      .addCase(fetchGIF.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "Failed to fetch GIFs";
      });
  },
});

export const { setQuery, setActiveTab } = searchSlice.actions;
export default searchSlice.reducer;
