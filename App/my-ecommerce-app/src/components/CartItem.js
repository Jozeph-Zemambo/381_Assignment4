import React from 'react';
import '../index.css';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity } = item;
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={name}  class="prod-img"/>
      <div>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${totalPrice}</p>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
