import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 m-4 max-w-xs">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2">
        <span className="text-xl font-bold text-red-600">
          {product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>
      <div className="mt-4">
        <Link
          to={`/product/${product.id}`} // Navigate to the product detail page
          className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700"
        >
          Product Info
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
