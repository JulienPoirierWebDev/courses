import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/useMemo">UseMemo</Link>
      <Link to="/useCallback">UseCallback</Link>
    </div>
  );
}

export default Header;
