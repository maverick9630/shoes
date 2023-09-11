import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  // Define the state variable
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://api.pujakaitem.com/api/products')
      .then((response) => {
        const foundProduct = response.data.find((p) => p.id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error('Product not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [productId]); // Include productId in the dependency array to re-fetch when it changes

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-red-600 mt-2">
        Price: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </div>
  );
};

export default ProductDetail;
