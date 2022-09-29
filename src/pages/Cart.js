import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 bg-white mx-10">
      {cartState.items.map((item) => (
        <CartItem
          image={item.image}
          title={item.title}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Cart;
