import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute } from "../constant/routes";

const UNSPLASH_KEY = import.meta.env.FRONTEND_UNSPLASH_KEY;
const TENOR_KEY = import.meta.env.FRONTEND_TENOR_KEY;
const PEXELS_KEY = import.meta.env.FRONTEND_PEXELS_KEY;

export const fetchPhotos = createAsyncThunk(
  "fetchPhotos",
  async ({ query, page = 1, per_page = 20 }) => {
    const res = await axios.get(apiRoute.unsplash.search.url, {
      method: apiRoute.unsplash.search.method,
      params: { query, page, per_page },
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    });
    return res.data;
  }
);

export const fetchVideos = createAsyncThunk(
  "fetchVideos",
  async ({ query, page = 1, per_page = 20 }) => {
    const res = await axios(apiRoute.pexels.search.url, {
      method: apiRoute.pexels.search.method,
      params: { query, page, per_page },
      headers: { Authorization: PEXELS_KEY },
    });
    return res.data;
  }
);

export const fetchGIF = createAsyncThunk(
  "fetchGIF",
  async ({ query, page = 1, per_page = 20 }) => {
    const res = await axios(apiRoute.tenor.search.url, {
      params: {
        method: apiRoute.tenor.search.method,
        q: query,
        pos: page,
        limit: per_page,
        key: TENOR_KEY,
        client_key: "test",
      },
    });
    return res.data;
  }
);
