import React, { useState } from 'react';
import '../index.css';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} class="prod-img"/>
      <h3 onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
        {product.name}
      </h3>
      {showDetails && <p>{product.description}</p>}
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;

