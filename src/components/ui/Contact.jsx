import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Form } from "react-router-dom";

// Form action handler
export const handleFormData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data); // handle submission logic here
    return null;
  } catch (error) {
    console.log(error);
  }
};

const Contact = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            Contact Us
          </h2>
          <p className="text-gray-300 mt-2 text-lg">
            Have a question? We’d love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Text & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-semibold mb-4">
              We Are Always Here to Help!
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Whether you have questions about movies, shows, memberships, or
              just want to share your thoughts — feel free to send us a message.
            </p>

            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                alt="cinema"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
          >
            <Form
              method="POST"
              action="/contact"
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="username"
                  className="flex items-center gap-2 font-medium"
                >
                  <FaUser className="text-red-600" /> Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-red-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 font-medium"
                >
                  <FaEnvelope className="text-red-600" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-red-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 font-medium"
                >
                  <FaPaperPlane className="text-red-600" /> Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-red-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold text-lg transition-all"
              >
                Send Message
              </button>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
