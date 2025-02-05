import { Link } from "react-router-dom";
import LogoURI from "/logo.svg";

export default function Logo({ ...props }) {
  return (
    <>
      <Link to={"/"}>
        <img {...props} src={LogoURI} alt="Logo" />
      </Link>
    </>
  );
}
