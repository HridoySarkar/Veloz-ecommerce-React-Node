import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../store/slices/productsSlice';
import './featureProducts.css';
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

  return (
    <div className="css-opq0ff exi01cl0 pb-4">
      <div className="section-layout-heading">
        <div className="section-layout-heading-text">
          <h1 className="section_title">Shop</h1>
        </div>
      </div>
      <div className="css-q9jv7 enr55ux0">
        {productStatus === 'loading' ? ( // Using a ternary operator
          <div className="loader">
            <SkeletonLoader />
          </div>
        ) : (
          limitedProducts.map((product) => (
            <div key={product.id} className="css-1ath97b enr55ux1 feature-product-size">
              <a
                className="shop-preview_link"
                aria-label={`Shop for ${product.title}`}
                href={`/product/${product.id}`}
              >
                <div className="shop-preview_image">
                  <img src={product.image} className='feature-product-img-size' alt={product.title} />
                </div>
                <h3 className="shop-preview_title">{truncateTitle(product.title, 20)}</h3>
                <span className="shop-preview_subLink">Shop now</span>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
