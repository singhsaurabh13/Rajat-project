import React from "react";

const products = [
  {
    name: "Automatic Pressure",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    name: "Casting",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    name: "Conventional vacuum casting",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    name: "Encapsulation",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    name: "Impregnation",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    name: "Potting",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  
];

const Electricprocess = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Electric Material Process
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            {/* Product Name */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricprocess;
