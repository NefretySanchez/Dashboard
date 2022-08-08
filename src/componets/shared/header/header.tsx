import './css/header.css'
import icon_notification from "./src/icon-notification.svg";
import icon_login from "./src/icon-login.svg";

const HeaderComponent = () => {
  return (
    <>
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header">
            <span className="light-logo"></span>
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {" "}
                <span className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"></span>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <span className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"></span>{" "}
              </li>
              <li className="nav-item hidden-sm-down"></li>
            </ul>
            <ul className="navbar-nav my-lg-0">
              <li className="nav-item hidden-sm-down" />
            </ul>
            <ul className="navbar-nav my-lg-0">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={icon_notification}
                    alt="user"
                    className="profile-pic icon-notification"
                  />
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={icon_login} alt="user" className="profile-pic icon-login" />
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
