import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full">
        {/* Left Side - Text Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Interested in White Labeling or Distributorship?</h2>
          <p className="text-gray-700 mb-6">
            Interested in expanding your business with our products? Explore our white labeling and distributorship opportunities to offer premium products under your brand.
          </p>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-1/2 bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-center mb-4">Looking forward to hearing from you</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="topic">Topic *</label>
              <select
                id="topic"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>--- Please Select ---</option>
                <option>White Labeling</option>
                <option>Distributorship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="message">Message *</label>
              <textarea
                id="message"
                placeholder="Message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              ></textarea>
            </div>

            {/* Placeholder for CAPTCHA */}
            <div className="mt-4">
              <p className="text-sm">Please complete the captcha validation below *</p>
              <div className="border border-gray-300 rounded-md p-4 mt-2">
                {/* You can integrate Google reCAPTCHA here */}
                <div className="text-center">I'm not a robot</div>
              </div>
            </div>

            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">
                I have read and agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
