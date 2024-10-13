import React, { useEffect } from 'react';
import '../featureProducts/featureProducts.css';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../app/pages/home/store/homeSlice';
import { cartSclice } from '../../store/slices/cartSlice';


const FeatureProducts = () => {
    const { products, status } = useSelector((state) => state.homeSlice);
    const cartState = useSelector((state)=>state.cartSclice)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(status);  // Check the loading/error status
    console.log(products); // Check the products array

    return (
        <div className="css-opq0ff exi01cl0 pb-4">
            <div className="section-layout-heading">
                <div className="section-layout-heading-text">
                    <h1 className="section_title">Shop</h1>
                </div>
            </div>
            <div className="col-md-12 d-flex">
                <div className="css-q9jv7 enr55ux0">
                    {status === 'loading' && <p>Loading...</p>}
                    {status === 'failed' && <p>Error loading products</p>}
                    {products.length > 0 ? (
                        products.slice(0,9).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
                <div className="col-md-4">
                    <ul>
                        {
                            cartState.carts.map(i=>{
                                return(
                                    <li key={i.id}>
                                        <div>
                                            <h5>
                                                
                                            {i.title}
                                            </h5>
                                        </div>
                                        <div>
                                            {i.price} x 
                                            <input className='px-1' type="number" 
                                            onChange={(e)=>{
                                                let value = e.target.value
                                                dispatch(cartSclice.actions.update_cart({
                                                    qty: value,
                                                    product:i,
                                                }))
                                                
                                            }}
                                            value={i.qty} min="1" />
                                            
                                            = {i.qty * i.price}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;
