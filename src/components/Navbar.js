import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="/images/logo_iskrovka_2.png"
          alt="ISKROVKA logo"
          style={{ height: "100px" }} // adjust size as needed
        />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}