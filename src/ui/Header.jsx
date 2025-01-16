import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Co</Link>
      <SearchOrder />
      <p>Melvin</p>
    </header>
  );
}

export default Header;
