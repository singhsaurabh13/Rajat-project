import React from "react";

const products = [
  {
    name: "Brush",
    image: "https://cdn.pixabay.com/photo/2016/10/16/11/29/painting-1744953_640.jpg", // Replace with actual image URL
  },
  {
    name: "Roller",
    image: "https://cdn.pixabay.com/photo/2015/09/05/08/12/painting-924144_640.jpg", // Replace with actual image URL
  },
  {
    name: "Spray",
    image: "https://img.freepik.com/free-photo/woman-with-spray-can_144627-11044.jpg?ga=GA1.1.804840931.1726815838&semt=ais_hybrid", // Replace with actual image URL
  },
];

const Coatingprocess = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Coating and Adhesive Material Process
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

export default Coatingprocess;
