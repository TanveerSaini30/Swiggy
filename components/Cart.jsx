import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";
function Cart() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitem", cartItems);
  return (
    <>
      <div className="text-center m-4 p-4">
        {/* <h1 className="font-bold text-2xl">Cart</h1> */}
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className=" w-6/12 m-auto">
          <ItemList items={cartItems} />
        </div>
        {cartItems.length === 0 && <h1> the Cart is Empty</h1>}
      </div>
    </>
  );
}

export default Cart;
