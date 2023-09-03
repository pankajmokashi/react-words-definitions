import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate(); 
  return (
    <nav>
      <h1 onClick={() => navigate("/")}>Dictionary App</h1>
      <div className="links">
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate("/history")}>History</div>
      </div>
    </nav>
  );
};

export default Navbar;
