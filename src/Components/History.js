import { fetchWordData } from "../redux/actions/postActions";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const History = () => {
  document.title = "History";
  let { history } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if(history.length > 0){
    const set = new Set(history);
    history = [...set];
}

  return (
    <div className="container">
      <Navbar />
      <div className="history">
        <h3>Search History</h3>
        <div className="history-items">
          {history.length > 0 &&
            history.map((word) => (
              <div
                onClick={() => {
                  dispatch(fetchWordData(word));
                  setTimeout(() => {
                    navigate("/showinfo");
                  }, 1000)

                }}
              >
                {word}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default History;
