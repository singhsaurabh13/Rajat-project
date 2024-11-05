import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        India’s Leading Manufacturers of High-Quality  Resins
      </h1>

      {/* Company Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are one of India’s leading manufacturers of high-quality epoxy resins, offering an extensive range of products tailored for diverse industries. Our dedication to innovation, quality, and sustainability has earned us a reputation as a trusted partner across the globe.
          With decades of experience, state-of-the-art manufacturing facilities, and a commitment to research and development, we provide solutions that meet the growing demands of industries ranging from construction, adhesives, and coatings to advanced composites.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision is to be the global leader in epoxy resin production, recognized for our innovative solutions and our commitment to quality and sustainability. We aim to continuously evolve our product lines to meet the demands of emerging technologies and industries, while maintaining an unwavering focus on environmental responsibility.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to deliver high-performance epoxy resins that enhance the durability, functionality, and aesthetics of our customers’ products. We strive to create lasting partnerships with our clients by offering superior products, technical expertise, and world-class customer service.
          We are committed to driving sustainable growth by adhering to ethical business practices, reducing our environmental footprint, and contributing positively to the communities in which we operate.
        </p>
      </section>
      
      {/* Footer/Contact Section */}
      <footer className="mt-12 p-6 bg-gray-800 text-white text-center rounded-lg">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p>Email: info@epoxyresins.co | Phone: +91 1234567890</p>
        <p>Follow us on LinkedIn, Twitter, and Facebook for the latest updates!</p>
      </footer>
    </div>
  );
};

export default About;
