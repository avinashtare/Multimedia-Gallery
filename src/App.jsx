import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
