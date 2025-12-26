import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/searchSlice";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAPI";
import { toast } from "react-toastify";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const { activeTab, query } = useSelector((state) => state.search);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchValue));
  };

  const fetchData = async () => {
    if (!query) return;

    let res;
    // check current tabs
    if (activeTab === "photos") {
      res = await dispatch(fetchPhotos({ query }));
    } else if (activeTab === "gif") {
      res = await dispatch(fetchGIF({ query }));
    } else if (activeTab === "videos") {
      res = await dispatch(fetchVideos({ query }));
    }

    // if any erro request notify
    if (res?.error) {
      toast.error(res?.error.message);
    }
  };
  // handle requests
  useEffect(() => {
    fetchData();
  }, [activeTab, query, dispatch]);

  return (
    <header className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <form
          onSubmit={submitHandler}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-3xl mx-auto"
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search anything..."
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-white bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          <button
            type="submit"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Search size={20} />
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBar;
