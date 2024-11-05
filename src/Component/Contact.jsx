import React, { useState } from "react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    notRobot: false, // State for 'I'm not a robot' checkbox
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission status

  // Handler for input change
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    // Handle checkbox separately from text inputs
    if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Check if 'I'm not a robot' is checked
    if (!formData.notRobot) {
      alert("Please confirm you're not a robot.");
      return;
    }

    console.log("Form Data:", formData); // Logs form data to the console
    setIsSubmitted(true); // Show success popup
  };

  // Function to close the success modal
  const handleCloseModal = () => {
    setIsSubmitted(false);
    // Optionally, reset form data after submission
    setFormData({ name: "", email: "", message: "", notRobot: false });
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Main heading */}
      <h1 className="text-3xl font-bold mb-8">Looking forward to hearing from you</h1>

      {/* Flex container for contact details and form */}
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl">
        
        {/* Left Side: Contact Information */}
        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg mr-8 mb-8 lg:mb-0">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">OFFICE ADDRESS</h2>
            <p>84/2nd, Vijaykar Wadi, S.V. Road, Malad West, Mumbai-400064</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">CALL US</h2>
            <p>Tel: +91 9819 1132 32</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">STORE HOURS</h2>
            <p>Mon-Fri: 10:00 - 20:00</p>
            <p>Weekend: 12:00 - 16:00</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">MAIL US</h2>
            <p>Email: info@mbenterprises.co</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-2/3">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message *</label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* 'I'm not a robot' Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notRobot"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.notRobot}
                onChange={handleChange}
              />
              <label htmlFor="notRobot" className="ml-2 block text-sm">
                I'm not a robot
              </label>
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agreement" className="ml-2 block text-sm">
                I have read and agree to the <a href="#" className="text-blue-500 underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
            <p>Thank you for reaching out. We will get back to you shortly.</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
