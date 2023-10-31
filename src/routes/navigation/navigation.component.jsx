import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/007 crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="link-container">
          <Link className="nav-links-container" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
