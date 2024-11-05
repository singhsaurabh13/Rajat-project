import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Top Resin Manufacturer in India</h2>
          <p className="text-sm mt-2">
            MB Enterprises is a leading epoxy <a href="#" className="text-blue-400">resin manufacturer</a> in India. We have been in this business for over 35 years and have a reputation for producing high-quality epoxy resin at competitive prices.
          </p>
        </div>

        {/* Popular Searches */}
        <div className="mb-8">
          <h3 className="text-lg font-bold">Popular Searches</h3>
          <p className="text-sm mt-2">
            Epoxy Colour Changer &bull; Epoxy Crack Filler &bull; Epoxy Flooring Manufacturers &bull; Epoxy Granite &bull; Epoxy Pigment &bull; Epoxy Putty &bull; Epoxy Resin Art Supplies &bull; Epoxy Vaccum &bull; Epoxy Waterproofing &bull; Epoxy White Paste &bull; Floor Coating &bull; Grouting Resin &bull; Lamination Resin Hardener &bull; Marble Crack Repair Epoxy &bull; Marble Epoxy &bull; Meena Colour &bull; Resin Manufacturers &bull; Table Top Epoxy Resin
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          {/* Information Column */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
            </ul>
          </div>

          {/* My Account Column */}
          <div>
            <h4 className="font-bold mb-4">My Account</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-400">My Account</a></li>
              <li><a href="#" className="hover:text-gray-400">Order History</a></li>
              <li><a href="#" className="hover:text-gray-400">Affiliates</a></li>
              <li><a href="#" className="hover:text-gray-400">Newsletter</a></li>
              <li><a href="#" className="hover:text-gray-400">Gift Certificates</a></li>
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Refund Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-2">Don't miss any updates or promotions by signing up to our newsletter.</p>
            <div className="flex">
              <input
                type="email"
                className="bg-gray-700 text-white px-3 py-2 w-full rounded-l-md focus:outline-none"
                placeholder="Your email"
              />
              <button className="bg-blue-500 px-4 py-2 rounded-r-md text-white hover:bg-blue-600">
                SEND
              </button>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="privacyPolicy" className="mr-2" />
              <label htmlFor="privacyPolicy">
                I have read and agree to the <a href="#" className="text-blue-400">Privacy Policy</a>
              </label>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#"><i className="fab fa-facebook text-2xl hover:text-gray-400"></i></a>
              <a href="#"><i className="fab fa-instagram text-2xl hover:text-gray-400"></i></a>
              <a href="#"><i className="fab fa-youtube text-2xl hover:text-gray-400"></i></a>
              <a href="#"><i className="fab fa-pinterest text-2xl hover:text-gray-400"></i></a>
              <a href="#"><i className="fab fa-whatsapp text-2xl hover:text-gray-400"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
