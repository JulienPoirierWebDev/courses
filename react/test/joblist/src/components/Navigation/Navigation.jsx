import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const listStyle = {
    listStyle: "none",
  };
  return (
    <>
      <nav>
        <ul>
          <li style={listStyle}>
            <Link
              style={{ textDecoration: "none" }}
              to="/withNavbar/movieSearch"
            >
              Vers Movies
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/withNavbar/age"> Vers Age</Link>
          </li>
          <li style={listStyle}>
            <Link to="/withNavbar/joblist">Vers Joblist</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
