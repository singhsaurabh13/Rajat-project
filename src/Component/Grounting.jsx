import React from "react";

// Main App Component
const Grounting = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Epoxy Grouting Resin</h1>

      {/* Content Section */}
      <div className="max-w-4xl text-center bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
        Epoxy Grout is developed by MB Enterprises, and is the leading Epoxy Grout Manufacturer in India, to fill all grouting gaps between 10 and 75 meters in thickness.

MB Enterprises has used the three-component process while making Epoxy Grout which consists of a foundation, hardener, and specially graded aggregate. It is a solvent-free epoxy resin grout.   The components arrive in the correct proportions for mixing. It's also a free-flowing grout that's perfect for applications where the material structure and chemical resistance of the hardened grout are crucial. It's suitable for a wide range of heavy-duty applications.


        </p>
        <p className="text-lg mb-4">
          This type of resin is especially suitable for areas prone to moisture, stains, and heavy traffic, 
          such as kitchens, bathrooms, and industrial floors. Epoxy grouting is also known for its easy maintenance 
          and ability to provide a seamless finish.
        </p>
        <p className="text-lg">
          Whether for commercial or residential applications, epoxy grouting resin ensures that tiled surfaces are protected 
          from wear and tear, making it a reliable choice for long-lasting durability and aesthetic appeal.
        </p>
      </div>
    </div>
  );
};

export default Grounting;
