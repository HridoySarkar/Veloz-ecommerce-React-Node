import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../../store/slices/productsSlice';

const ListProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (productStatus === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
