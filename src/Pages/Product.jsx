import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))


  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox/>
      <RelatedProducts/>
      
    </div>
  )
}

export default Product