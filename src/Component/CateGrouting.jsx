import React from 'react';
import product05 from '../assets/Product05.jpg'

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg px-28 shadow-lg overflow-hidden">
      {/* Image */}
      <img
        src={product05}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Title */}
      <div className="p-4">
        <h2 className="text-md font-bold mb-2 truncate">{title}</h2>
        <div className="text-center mt-2">
          {/* <a
            href="#"
            className="text-blue-600 text-sm flex items-center justify-center hover:underline"
          >
            See products &rarr;
          </a> */}
        </div>
      </div>
    </div>
  );
};

const CateGrouting = () => {
  const products = [
    {
      id: 1,
      image: '',
      title: 'High Gloss Italian 11',
    },
    {
      id: 2,
      image: '',
      title: 'Italian 09',
    },
    {
      id: 3,
      image: '',
      title: 'Italian Marble 100',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x300.png?text=Epoxy+Waterproofing',
      title: 'Italian Marble ALK 21',
    },
    {
      id: 5,
      image: 'https://www.mbenterprises.co/image/cache/catalog/WATERPROOFING-300x300.jpg',
      title: 'Italian Marble Bottom 63',
    },
    // {
    //   id: 6,
    //   image: 'https://via.placeholder.com/300x300.png?text=Epoxy+Lamination+Resin',
    //   title: 'EPOXY LAMINATION RESIN',
    // },
    // {
    //   id: 7,
    //   image: 'https://via.placeholder.com/300x300.png?text=Epoxy+Art+Resin',
    //   title: 'EPOXY ART RESIN',
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12"> WaterProofing Resin</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CateGrouting;
