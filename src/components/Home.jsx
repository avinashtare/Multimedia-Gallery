import ResultGrid from "./ResultGrid";
import SearchBar from "./SearchBar";
import Tabs from "./tabs/Tabs";

function Home() {
  return (
    <div className="w-full bg-black text-white">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
}

export default Home;
