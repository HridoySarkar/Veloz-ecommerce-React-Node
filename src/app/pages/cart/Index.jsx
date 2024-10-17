import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
    const cartItems = useSelector((state) => state.cartSclice.carts); // Get cart items from Redux store

    // Calculate subtotal and total
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
    const discount = 0; // Set your discount logic if needed
    const total = subtotal - discount;

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-8">
                    <div className="head_title d-flex justify-content-between">
                        <h2 className='fs-1'>Cart</h2>
                        <button><span><i className="fa-solid fa-trash"></i></span> Remove</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" /></th>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row"><input type="checkbox" /></th>
                                        <td>{item.title}</td>
                                        <td>
                                            <span className='d-flex justify-content-center flex-column'>
                                                <input type="number" className="form-control" id={`quantity-${item.id}`} value={item.qty} min="1" />
                                                <button><span><i className="fa-solid fa-trash"></i></span> Remove</button>
                                            </span>
                                        </td>
                                        <td>${(item.price * item.qty).toFixed(2)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No items in the cart</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <div className="qty-total border px-4 rounded p-4">
                        <div className="d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Discount</p>
                            <p>${discount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <button className="btn btn-dark w-100" type="button">Checkout now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
