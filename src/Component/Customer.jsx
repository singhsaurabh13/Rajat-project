import React from 'react';
import image from '../assets/bg.png'; // Only import the image once

const testimonials = [
  {
    quote: "Amazing products and top-notch customer service! I’ve been a loyal customer for years and have always been impressed by their quality.",
    name: "John Doe",
    title: "CEO, Company XYZ"
  },
  {
    quote: "Their attention to detail and innovative solutions are unmatched. I highly recommend them for any business looking for premium services.",
    name: "Jane Smith",
    title: "Marketing Head, ABC Corp"
  },
  {
    quote: "I've been extremely satisfied with their consistent quality and professionalism. A company that truly cares about their customers.",
    name: "Michael Johnson",
    title: "Product Manager, Global Tech"
  }
];

const Customer = () => {
  return (
    <section 
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${image})` }} // Correct background image usage
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">What Our Customers Say</h2>

        {/* Card Container */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="font-bold text-xl">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;
