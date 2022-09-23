import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-8 px-12">
      <h1 className="text-3xl mb-12">Welcome Our Gun Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            cartHandler={props.cartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
