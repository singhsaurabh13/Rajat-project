// Features.js (React Component)

import React from 'react';

const features = [
  {
    title: "EXTENSIVE PRODUCT RANGE",
    description: "Over 700+ unique products",
    icon: "📦", // You can replace this with your SVG or Icon component
  },
  {
    title: "PERSONALIZED SOLUTIONS",
    description: "Custom products tailored to your needs.",
    icon: "✨", // Custom SVG or icon
  },
  {
    title: "GLOBAL SHIPPING",
    description: "Delivering to customers worldwide.",
    icon: "🌍", // Custom SVG or icon
  },
  {
    title: "ISO CERTIFIED",
    description: "ISO 9001:2015 certified for quality excellence.",
    icon: "✅", // Custom SVG or icon
  },
  {
    title: "R&D CENTRE",
    description: "Dedicated R&D Centre for continuous improvement.",
    icon: "🔬", // Custom SVG or icon
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Icon */}
            <div className="text-5xl">{feature.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-bold">{feature.title}</h3>
            {/* Description */}
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
