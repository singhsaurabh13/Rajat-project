import React from "react";

// Main App Component
const Lamination = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Epoxy Lamination Resin</h1>

      {/* Content Section */}
      <div className="max-w-4xl text-center bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          Altrachem lamination resin is a versatile, high-strength adhesive commonly used in composite materials and 
          fiber-reinforced plastics. It is ideal for bonding layers of material together, offering superior 
          mechanical properties, chemical resistance, and durability.
        </p>
        <p className="text-lg mb-4">
          Typically used in industries such as marine, automotive, and aerospace, epoxy lamination resin is 
          essential in the construction of lightweight, high-performance structures. Its excellent adhesion 
          to a variety of substrates ensures strong bonds that resist both environmental and mechanical stress.
        </p>
        <p className="text-lg">
          Altrachem resins are known for their ability to cure at room temperature and can be tailored for specific 
          applications by adjusting their formulation. This makes them an ideal choice for both professional and 
          DIY projects requiring reliable, high-strength laminations.
        </p>
      </div>
    </div>
  );
};

export default Lamination;
