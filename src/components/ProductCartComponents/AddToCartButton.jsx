import React from 'react';
import { useDispatch } from 'react-redux';
import { cartSclice } from '../../store/slices/cartSlice';

const AddToCartButton = ({ product }) => {  // Destructure product
  let dispatch = useDispatch();
  console.log("its",cartSclice);
  

  return (
    <>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          dispatch(cartSclice.actions.add_to_cart(product))
          window.s_alert(`${product.title} add to cart`, "success");  // Show product title in alert
        }}
        className="shop-preview_subLink"
      >
        Add to cart
      </button>
    </>
  );
}

export default AddToCartButton;
