import React from "react";

// Array of products with names and image URLs
const products = [
  {
    name: "MB Epoxy Art Resin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VP2BkQIYpVMWSQ1yguY6oFAZgHNYXtXYXw&s", // Replace with your image URL
  },
  {
    name: "MB Epoxy Table Top Resin (08-10 mm) dd",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sF-iOj7DAXtiur24PrI92SJIcQQD5AGw_g&s", // Replace with your image URL
  },
 
 
];

// Main App Component
const Artresign = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8"> Art Resin</h1>

      {/* Grid container for product cards */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 "
            />
            {/* Product Name */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-center">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="px-20">
      Altrachem 201 is low viscosity with a fast drying system. It is used to fill and repair minor cracks and small surface defects like fissures, pinholes, and hair-thin. 
      Post polish provides an excellent gloss. Suitable for any kind of stone.
      <br />
      <p className="px-20 ">Epoxy Resin for Art provides a convenient, clean, and simple way to monitor 3D height in art projects by adding depth and thickness. MB Epoxy Resin for Art can be used on a variety of surfaces (canvas, wood, MDF, glass, steel, metals, stone, ceramic etc).
         The finished product has a subtle, pastel matte texture. It can be sealed with Master cast 1-2-1 transparent artwork resin for a glossy finish. A partial resin gloss coating may be applied in chosen areas to produce a matt or gloss contrast.</p>
      
      </div>
    </div>
  );
};

export default Artresign;
