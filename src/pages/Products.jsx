import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products-section">
      <h1><Link to="/Products"></Link>Products</h1>
      <Link to="/cakes">Cakes</Link>
    </div>
  );
}

export default Products;
