import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={Logo} alt="" />
          <h1>
            Movie <span className="helper_text">App</span>
          </h1>
        </div>
        <nav>
          <ul className="nav_menu">
            {header_data?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="nav_item">
          <li>Bosh Sahifa</li>
          <li>About</li>
          <li>
            <FontAweSomeIcon icon={faSearch} />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
