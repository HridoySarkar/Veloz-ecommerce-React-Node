import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/slices/productsSlice';
import { addItemToCart } from '../../store/slices/cartSlice';
import '../featureProducts/featureProducts.css';
import SkeletonLoader from '../featureProductLoader/Index'; // Assuming this is your loader component

const FeatureProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const limitedProducts = products.slice(0, 6); // Limit to 6 products

  // Function to truncate the title
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '.'; // Add ellipsis if truncated
    }
    return title;
  };

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Dispatch the full product object to add it to the cart
  };

  return (
    <div className="css-opq0ff exi01cl0 pb-4">
      <div className="section-layout-heading">
        <div className="section-layout-heading-text">
          <h1 className="section_title">Shop</h1>
        </div>
      </div>
      <div className="css-q9jv7 row enr55ux0">
        {productStatus === 'loading' ? (
          <div className="loader d-flex">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        ) : (
          limitedProducts.map((product) => (
            <div key={product.id} className="css-1ath97b enr55ux1 border-info rounded p-4 feature-product-bg-color feature-product-size">
              <a
                className="shop-preview_link"
                aria-label={`Shop for ${product.title}`}
                href={`/product/${product.id}`}
              >
                <div className="shop-preview_image">
                  <img src={product.image} className='feature-product-img-size' alt={product.title} />
                </div>
                <h3 className="shop-preview_title">{truncateTitle(product.title, 20)}</h3>
                <span
                  className="shop-preview_subLink"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product); // Dispatch the full product object to the cart
                  }}
                >
                  Shop now
                </span>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
