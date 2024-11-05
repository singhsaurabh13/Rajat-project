import React from "react";

// Mock data for products
const Mbepoxy = [
  {
    id: 1,
    image: "/path-to-image/high-gloss-italian-11.jpg", // Replace with the actual image URL
    name: "High Gloss Italian 11",
    isNew: true,
  },
  {
    id: 2,
    image: "/path-to-image/italian-09.jpg", // Replace with the actual image URL
    name: "Italian 09",
    isNew: true,
  },
  {
    id: 3,
    image: "/path-to-image/italian-marble-100.jpg", // Replace with the actual image URL
    name: "Italian Marble 100",
    isNew: true,
  },
  {
    id: 4,
    image: "/path-to-image/italian-marble-alk-21.jpg", // Replace with the actual image URL
    name: "Italian Marble ALK 21",
    isNew: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <h2 className="text-lg font-bold text-center mt-4">{product.name}</h2>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Epoxy Italian Marble Resin
      </h1>
      <div className="flex justify-between items-center mb-4">
        {/* Sorting and Show Selectors */}
        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <i className="fas fa-th"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="flex space-x-4">
          <select className="bg-gray-200 p-2 rounded">
            <option>Sort By: Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <select className="bg-gray-200 p-2 rounded">
            <option>Show: 12</option>
            <option>Show: 24</option>
            <option>Show: 36</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Mbepoxy;
