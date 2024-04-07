import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav>
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
        <Link to="about-us">About Us</Link>
      </nav>
    </div>
  );
};

export default Header;
