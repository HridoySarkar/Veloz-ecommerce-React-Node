import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../../../store/slices/cartSlice'; // Assuming you have a cartSlice
import '../cart/style.css';

const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Getting cart items from Redux store
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

  const handleQuantityChange = (id, change) => {
    dispatch(updateQuantity({ id, change }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <h1>My Cart</h1>
      <p>{cartItems.length} items</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="cart-item-details">
            <h2>{item.title}</h2>
            {item.size && <p>Size: {item.size}</p>}
            <div className="cart-item-quantity">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
          </div>
          <div className="cart-item-price">
            <p>₹{item.price * item.quantity}</p>
          </div>
          <button className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ₹{cartTotal}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Index;
