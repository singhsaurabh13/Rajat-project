import React from 'react';
import logo from '../assets/Logo.png'

const products = [
  {
    id: 1,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 38 (pbw)',
    viscosity: '140-310 (mPa.s)',
    potLife: '100-120 (minutes)',
    Tg: '55 (°C)',
    code: 'MBR 8143-MBH 9222',
  },
  {
    id: 2,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 80-90 (pbw)',
    viscosity: '320-400 (mPa.s)',
    potLife: '25-40 (minutes)',
    Tg: '50-55 (°C)',
    code: 'MBR 818-MBH 9202',
  },
  {
    id: 3,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 50 (pbw)',
    viscosity: '110-310 (mPa.s)',
    potLife: '25-35 (minutes)',
    Tg: '53 (°C)',
    code: 'MBR 818-MBH 9224',
  },
  {
    id: 3,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 50 (pbw)',
    viscosity: '110-310 (mPa.s)',
    potLife: '25-35 (minutes)',
    Tg: '53 (°C)',
    code: 'MBR 818-MBH 9224',
  },
  {
    id: 3,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 50 (pbw)',
    viscosity: '110-310 (mPa.s)',
    potLife: '25-35 (minutes)',
    Tg: '53 (°C)',
    code: 'MBR 818-MBH 9224',
  },
  {
    id: 3,
    logo: logo, // Replace with your logo URL
    title: 'Advanced Materials',
    mixRatio: '100 : 50 (pbw)',
    viscosity: '110-310 (mPa.s)',
    potLife: '25-35 (minutes)',
    Tg: '53 (°C)',
    code: 'MBR 818-MBH 9224',
  },
 
];

const ProductCard = ({ product }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-72 relative">
    <img src={product.logo} alt="Logo" className="w-12 h-12 mb-4 mx-auto" />
    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
      NEW
    </span>
    <h2 className="text-xl font-semibold text-center mb-4">{product.title}</h2>
    <ul className="text-center text-gray-700">
      <li>
        <strong>Mix Ratio:</strong> {product.mixRatio}
      </li>
      <li>
        <strong>Part B Mix Viscosity @ 25 °C:</strong> {product.viscosity}
      </li>
      <li>
        <strong>Pot Life @ 25 °C:</strong> {product.potLife}
      </li>
      <li>
        <strong>Tg:</strong> {product.Tg}
      </li>
    </ul>
    <div className="text-center mt-4 text-blue-600 font-bold cursor-pointer hover:underline">
      {product.code}
      <span className="ml-2 text-pink-500">&rarr;</span>
    </div>
  </div>
);

const Spary = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold text-center mb-8">Spary</h1>
    <div className="flex justify-center mb-4 space-x-4">
      <button className="bg-gray-200 p-2 rounded">Grid View</button>
      <button className="bg-gray-200 p-2 rounded">List View</button>
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-gray-600">Sort By:</label>
        <select id="sort" className="p-2 border rounded">
          <option>Default</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="show" className="text-gray-600">Show:</label>
        <select id="show" className="p-2 border rounded">
          <option>12</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="text-center text-gray-500 mt-6">You have reached the end of the list.</div>
  </div>
);

export default Spary;
