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
                
            </div>
        </div>
    );
};

export default FeatureProducts;
