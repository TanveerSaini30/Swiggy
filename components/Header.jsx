import { useContext, useState } from "react";
import { Logo } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const status = useOnlineStatus();
  const { userInfo } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between mt-2 shadow-lg">
      <div className="">
        <img className="w-24 " src={Logo} alt="" />
      </div>

      <div className=" flex items-center">
        <ul className="flex p-4 gap-4 ">
          <li>Status: {status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/Grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>
            <Link to="/cart">🛒-{cartItems.length} Items</Link>
          </li>
          <button
            className="m-0 p-0"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="font-bold  ">{userInfo}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
