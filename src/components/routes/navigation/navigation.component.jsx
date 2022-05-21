import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as BTS } from "../../assets/icons8-bts-logo.svg";
import "./navigation.styles.scss";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
