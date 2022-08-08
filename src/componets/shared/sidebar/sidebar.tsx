import "./css/sidebar.css";
import icon_sidebar from "./src/icon-logo.svg";
import icon_logout from "./src/ic_round-log-out.svg";
import icon_config from "./src/icon-config.svg";
import icon_insues from "./src/icon-insues.svg";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <>
      <aside className="left-sidebar">
        <div className="scroll-sidebar" style={{ backgroundColor: "#2D4857" }}>
          <nav className="sidebar-nav" style={{ backgroundColor: "#2D4857" }}>
            <ul id="sidebarnav" style={{ backgroundColor: "#2D4857" }}>
              <li className="icon-sidebar">
                <span className="hide-menu">
                  <img src={icon_sidebar} alt="" />{" "}
                </span>
              </li>

              <li className="item-config">
                <Link to="/dashboard">
                  <span className="hide-menu">
                    <img src={icon_config} alt="" />{" "}
                  </span>
                  <span className="hide-menu item-dashboard">Dashboard </span>
                </Link>
              </li>
              <li className="item-insues">
                <Link to="/incidentes">
                  <span className="hide-menu ">
                    <img src={icon_insues} alt="" />{" "}
                  </span>
                  <span className="hide-menu item-insues">Incidentes </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logout">
          <ul>
            <li>
              <Link to="/">
                <span className="hide-menu">
                  {" "}
                  <img src={icon_logout} alt="" />{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;
