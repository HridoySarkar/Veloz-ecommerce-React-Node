import React from 'react';
import SkeletonLoader from "../components/featureProductLoader/Index";
import AddToCartButton from "../components/ProductCartComponents/AddToCartButton";

const ProductCard = ({ product }) => {  // Destructure product

  return (
    <div key={product.id} className="css-1ath97b enr55ux1 border-info rounded p-4 feature-product-bg-color feature-product-size">
      <a
        className="shop-preview_link"
        aria-label={`Shop for ${product.title}`}  // Include product title for accessibility
        href={`/product/${product.id}`}
      >
        <div className="shop-preview_image">
          <img src={product.image} className='feature-product-img-size' alt={product.title} />  {/* Alt text with product title */}
        </div>
        <h3 className="shop-preview_title">{product.title}</h3>
        <h3 className="shop-preview_price">{product.price}$</h3>
        <AddToCartButton product={product} />
      </a>
    </div>
  );
}

export default ProductCard;
