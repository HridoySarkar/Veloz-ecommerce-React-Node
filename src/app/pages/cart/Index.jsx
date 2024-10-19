import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../../store/slices/cartSlice";


const Index = () => {
    const dispatch = useDispatch();
    const cartstate = useSelector((state) => state.cartSlice);
    
    useEffect(() => {
      dispatch(cartSlice.actions.set_default_carts());
    }, [dispatch]);
  
    const handleQuantityChange = (e, product) => {
      const newQty = parseInt(e.target.value, 10);
      if (newQty > 0) {
        dispatch(cartSlice.actions.update_cart({ qty: newQty, product }));
      }
    };

    const handleAllRemove = () => {
        dispatch(cartSlice.actions.clear_cart());
        window.s_alert('all products are removed','success');
      };
  
    return (
      <div className="container mb-5 mt-3">
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="head_title d-flex justify-content-between">
              <h2 className="fs-1">Cart</h2>
              <button
                onClick={handleAllRemove}
              >
                <span>
                  <i className="fa-solid fa-trash"></i>
                </span> Remove all
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartstate.carts && cartstate.carts.length > 0 ? (
                  cartstate.carts.map((i) => (
                    <tr key={i.id}>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td>{i.title}</td>
                      <td>
                        <span className="d-flex justify-content-center flex-column">
                          <input
                            onChange={(e) => handleQuantityChange(e, i)}
                            type="number"
                            className="form-control"
                            style={{"width" : "120px"}}
                            id={`quantity-${i.id}`}
                            value={i.qty}
                            min="1"
                          />
                          <button
                            onClick={() =>
                              dispatch(cartSlice.actions.remove_from_cart(i))
                            }
                          >
                            <span>
                              <i className="fa-solid fa-trash"></i>
                            </span>{" "} Remove
                          </button>
                        </span>
                      </td>
                      <td>${(i.price * i.qty).toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      Your cart is empty{" "}
                      <button className="btn btn-dark">
                        <a href="/" className="text-white">Shop now</a>
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="qty-total border px-4 rounded p-4">
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${cartstate.cart_total.toFixed(2)}</p>
              </div>
              <button className="btn btn-dark w-100" type="button">
                Checkout now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Index;
  