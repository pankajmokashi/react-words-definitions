import Home from "./Components/Home";
import History from "./Components/History";
import { Routes, Route } from "react-router-dom";
import ShowInfo from "./Components/ShowInfo";

const App = () => {
    return(
        <div className="page">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="history" element={<History />}></Route>
                <Route path="showinfo" element={<ShowInfo />}></Route>
            </Routes>
        </div>
    )
}

export default App;