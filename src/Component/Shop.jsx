import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full sm:w-72">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
        {product.isSale && (
          <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-semibold">
            Sale
          </span>
        )}
      </div>
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <div className="mb-4">
        {product.oldPrice && (
          <span className="line-through text-gray-500 text-sm mr-2">
            Rs. {product.oldPrice}
          </span>
        )}
        <span className="text-blue-600 font-bold">
          Rs. {product.price}
        </span>
      </div>
      <Link to="/productpopup" className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
        {product.isAddToCart ? 'Add to cart' : 'Choose options'}
      </Link>
    </div>
  );
};

const Shop = () => {
  const products = [
    {
      id: 1,
      name: ' Table Top Resin (08-10 mm)',
      image: 'https://mbepoxy.in/cdn/shop/files/MAC_2273-1000x1000_2.jpg?v=1683722388&width=360',
      oldPrice: 1200,
      price: 1139,
      isSale: true,
      isAddToCart: false,
    },
    {
      id: 2,
      name: '® Art Resin',
      image: 'https://mbepoxy.in/cdn/shop/files/MbEpoxyresin1000x1000.jpg?v=1683701031&width=360',
      oldPrice: 1299,
      price: 1229,
      isSale: true,
      isAddToCart: false,
    },
    {
      id: 3,
      name: ' Table Top Resin Kit',
      image: 'https://mbepoxy.in/cdn/shop/files/MBTabletopkit11000x1000.jpg?v=1683707162&width=360',
      oldPrice: 1399,
      price: 1144,
      isSale: true,
      isAddToCart: true,
    },
    {
      id: 4,
      name: ' Art Resin Kit',
      image: 'https://mbepoxy.in/cdn/shop/files/MAC_2275-550x550.jpg?v=1683698843&width=360',
      oldPrice: 1699,
      price: 1249,
      isSale: true,
      isAddToCart: true,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
