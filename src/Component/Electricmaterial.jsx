import React from "react";

const products = [
  {
    name: "Bushings",
    image: "https://www.mbenterprises.co/image/cache/catalog/Advance-Material/by-product/electrical-material/Bushings-512x512.jpg", // Replace with actual image URL
  },
  {
    name: "Casting",
    image: "https://media.istockphoto.com/id/1151117397/photo/scrap-metal-being-poured-into-an-electric-arc-furnace-at-a-steel-factory.jpg?s=612x612&w=0&k=20&c=INaIySewpaKhYNj-DtYCBPKiGuafaGEaAKET-89o7XQ=", // Replace with actual image URL
  },
  {
    name: "Dry try transformer",
    image: "https://cdn.pixabay.com/photo/2020/04/01/15/31/transformer-4991610_640.jpg", // Replace with actual image URL
  },
  {
    name: "Electronic and electric component",
    image: "https://cdn.pixabay.com/photo/2013/12/22/15/30/motherboard-232515_640.jpg", // Replace with actual image URL
  },
  {
    name: "Encapsulation",
    image: "https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_640.jpg", // Replace with actual image URL
  },
  {
    name: "Generator",
    image: "https://cdn.pixabay.com/photo/2013/10/04/16/23/railroad-generator-190664_640.jpg", // Replace with actual image URL
  },
  {
    name: "Hv chokes",
    image: "https://www.mbenterprises.co/image/cache/catalog/Advance-Material/by-product/electrical-material/HV%20Choke%20coils-512x512.jpg", // Replace with actual image URL
  },
  {
    name: "Hv Moters",
    image: "https://www.mbenterprises.co/image/cache/catalog/Advance-Material/by-product/electrical-material/Motors-512x512.jpg", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Epoxy Italian Marble Resin",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Electricmaterial = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
      Electrical Material
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricmaterial;
