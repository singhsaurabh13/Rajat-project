import React from "react";

// Array of products with name and image URL
const products = [
  {
    // name: "Product 1",
    image: "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/what-is-epoxy-flooring/_jcr_content/root/container/container_2072089177/teaser.coreimg.jpeg/1711450865632/epoxy-flooring-2.jpeg", // Replace with your image URL
  },
  {
    // name: "Product 2",
    image: "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/what-is-epoxy-flooring/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg/1711450837552/epoxy-flooring-1.jpeg", // Replace with your image URL
  },
];

// Main App Component
const Floorcoating = () => {
  return (
    <>
    <div className=" justify-center p-8 bg-gray-100 ">
        <div className="text-center text-3xl font-bold py-5">Epoxy Floor Coating</div>
      {/* Grid container for product cards */}
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full  object-cover"
            />
            {/* Product Name */}
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
            </div>
          </div>
          
        ))}
      </div>
      </div>
    </div>
    <div>
     <h1 className="font-bold text-center">What is Epoxy Flooring</h1>
     <br />
     <p className="px-28">Epoxy flooring is a highly durable and customisable flooring solution that is created by combining two main components: epoxy resin and a hardener. The epoxy resin acts as a binder, while the hardener provides strength and stability. When these two components are mixed together, a chemical reaction occurs, forming a rigid and durable surface. But what is epoxy flooring used for? Epoxy flooring can be applied to various substrates such as concrete, metal, and wood.
       It is suitable for a wide range of applications from epoxy flooring for home use to industrial use.</p>
    </div>
    </>
  );
};

export default Floorcoating;
