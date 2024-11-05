import React from "react";

// Array of products with names and image URLs
const products = [
  {
    // name: "Product 1",
    image: "data:image/jpeg;base64,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", // Replace with your image URL
  },
  {
    // name: "Product 2",
    image: "data:image/jpeg;base64,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", // Replace with your image URL
  },

];

// Main App Component
const Whitepaste = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">Epoxy white paste</h1>

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
              className="w-full h-48 object-cover"
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
      <div>
      Altrachem 201 is low viscosity with a fast drying system. It is used to fill and repair minor cracks and small surface defects like fissures, pinholes, and hair-thin. 
      Post polish provides an excellent gloss. Suitable for any kind of stone.
      <br />
      <h1 className="font-semibold">What is Epoxy White Paste?</h1>
      <br />
      <p>Epoxy white paste is a versatile adhesive and filler that is widely used in various industries and applications. It consists of a two-part epoxy resin system mixed with a white pigment to create a smooth, paste-like consistency. This epoxy paste offers excellent bonding strength, durability, 
        and a white finish, making it ideal for bonding, filling, repairing, and aesthetic applications.</p>
      
      </div>
    </div>
  );
};

export default Whitepaste;
