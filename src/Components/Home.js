import { useState } from "react";
import Navbar from "./Navbar";
import { fetchWordData, addToHistory } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import WordDetails from "./WordDetails";
import Loader from "./Loader";

const Home = () => {
  document.title = "Home";
  let [word, setWord] = useState("");
  const { loading, currentSearch } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addToHistory(word));
    dispatch(fetchWordData(word));
    setWord("");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="search-div">
        <input
          type="search"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? <Loader /> : (currentSearch && <WordDetails />)}
    </div>
  );
};

export default Home;
