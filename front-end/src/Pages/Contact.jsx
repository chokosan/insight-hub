// ContactPage.jsx
import React from "react";
import contactImage from "../assets/contactus.png"; // Replace with your image path

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full flex flex-col md:flex-row items-center p-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us. Your feedback and inquiries are always welcome, and we will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

