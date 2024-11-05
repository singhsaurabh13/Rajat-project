import React, { useState } from "react";

function ProductPopup({ product }) {
  const [cart, setCart] = useState([]);

  // Handle adding item to cart
  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert("Product added to cart!");
  };

  // Product rating
  const renderRatingStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ));
  };

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4">
      {/* Product Image */}
      <img src="https://mbepoxy.in/cdn/shop/files/MAC_2273-1000x1000_2.jpg?v=1683722388&width=600" alt={product.name} className="w-full h-48 object-cover" />

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

        {/* Product Rating */}
        <div className="flex items-center mt-2">
          {renderRatingStars(product.rating)}
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Product Description */}
        <p className="mt-2 text-gray-600">{product.description}</p>

        {/* Product Price */}
        <div className="mt-2 text-lg font-semibold text-gray-800">${product.price}</div>

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
