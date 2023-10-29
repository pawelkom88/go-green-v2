import logo from "@assets/logo.png";
import { Link } from "react-router-dom";

interface LogoProps {
  size: number;
}

const Logo = ({ size }: LogoProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <Link to="/">
        <img src={logo} alt="go green logo" />
      </Link>
    </div>
  );
};

export default Logo;
