import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as BTS } from "../../assets/icons8-bts-logo.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BTS className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
