import React from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const item = {
      id: Math.random(),
      price: product.price,
      image: product.image,
      title: product.title,
    };
    dispatch(add(item));
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col items-center justify-end">
      <div className="flex flex-col justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[120px] h-auto mt-5"
        />
        <h1 className="text-xs font-extrabold mt-5">{product.title}</h1>
        <p className="mt-2 font-semibold">$ {product.price}</p>
      </div>
      <button
        className="my-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 w-1/2"
        onClick={addItemHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
