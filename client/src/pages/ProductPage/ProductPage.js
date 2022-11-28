import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card/Card';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import ProductInfo from './ProductInfo/ProductInfo';

import * as actions from '../../redux/actions';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.items);

  const [detailProduct, setDetailProduct] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  React.useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);
  return (
    <>
      <ProductInfo product={detailProduct} />
      <ProductsSection heading='Similar Products'>
        {products.map((product) => {
          return product.category === detailProduct.category ? (
            <Card key={product._id} product={product} />
          ) : null;
        })}
      </ProductsSection>
    </>
  );
};

export default Product;
