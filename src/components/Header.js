import "../styles/Header.css";
import carlogo from "../images/carlogo.png"
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <div className="logo">
        <img src={carlogo} />
      </div>
      <div className="title">Car Search App</div>
    </span>
  );
};

export default Header;
