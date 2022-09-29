import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
  // API CALL
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-20 px-20">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          // id={productID}
          // image={product.image}
          // title={product.title}
          // price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
