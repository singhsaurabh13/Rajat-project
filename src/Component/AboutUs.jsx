import React from 'react';

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img 
            src="https://cdn.pixabay.com/photo/2013/03/13/20/44/netherlands-93274_640.jpg" 
            alt="About Us Image" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full md:pl-10 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          
          <p className="text-gray-700 mb-6">
            We are a leading company in the industry, committed to delivering the highest quality products and services to our customers. With over 20 years of experience, we have a proven track record of excellence in various sectors.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to innovate and provide sustainable solutions that meet the needs of our clients and contribute positively to the environment. We believe in continuous improvement and always strive for perfection in everything we do.
          </p>
          <p className="text-gray-700">
            Join us on our journey as we continue to grow, evolve, and make a difference in the world. We look forward to building lasting relationships with all of our clients and partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
