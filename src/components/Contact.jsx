import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_mobile: formData.mobile,
      message: formData.message,
      
    };

    emailjs
      .send(
        "service_bceo99f", // Replace with your EmailJS Service ID
        "template_2sssf0f", // Replace with your EmailJS Template ID
        templateParams,
        "gkZnRh_C81nHcfpoH" // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "", plan: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="bg-gray-100 dark:bg-black dark:text-white">
      <div className="flex flex-col items-center min-h-screen px-4 py-12 mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-4 text-3xl font-bold text-center text-yellow-500 md:text-4xl">
          Get in Touch
        </h2>
        <p className="w-20 h-1 mx-auto mb-2 text-center bg-yellow-500"></p>
        <p className="max-w-xl mb-12 text-center text-gray-600 dark:text-gray-300">
          Have questions, need guidance, or want to join our fitness community?
          Drop us a message or visit us—we’re here to help you push limits and
          reach goals.
        </p>

        <div className="grid gap-10 md:grid-flow-col">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1e1e20] shadow-xl rounded-xl p-8 md:p-12 max-w-xl md:w-[400px] hover:shadow-2xl transition">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <input type="hidden" name="plan" value={formData.plan} />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm"
                  placeholder="John.doe@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm"
                  placeholder="+91 7895****90"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 font-semibold text-white transition bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Location & Map */}
          <div className="bg-white dark:bg-[#1e1e20] shadow-xl rounded-xl p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8 hover:shadow-2xl transition">
            <div className="flex-1 space-y-5">
              <h3 className="mb-4 text-2xl font-semibold text-yellow-500">
                Our Location
              </h3>

              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 border border-yellow-500 rounded-2xl">
                  <MapPin className="text-yellow-500" />
                </div>
                <p>
                  Near Durga Mandir, Banjarawala, <br />
                  Dehradun, Uttarakhand 248121
                </p>
              </div>

              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 border border-yellow-500 rounded-2xl">
                  <Phone className="text-yellow-500" />
                </div>
                <a href="tel:9897829686">+91 98978 29686</a>
              </div>

              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 border border-yellow-500 rounded-2xl">
                  <Mail className="text-yellow-500" />
                </div>
                <a href="mailto:amanjuyal96@gmail.com">amanjuyal96@gmail.com</a>
              </div>

              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 border border-yellow-500 rounded-2xl">
                  <Clock className="text-yellow-500" />
                </div>
                <p>
                  <span className="font-semibold">Mon - Wed:</span> 5:00 AM - 10:00 PM <br />
                  <span className="font-semibold">Thu - Sat:</span> 5:00 AM - 10:00 PM
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="w-full h-64 overflow-hidden bg-gray-300 rounded-lg">
                <iframe
                  title="Gym Location"
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.568642997761!2d78.026436174367!3d30.277869407475563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929600ebc8b19%3A0xbfc81a0b0c35ad25!2sMUTANTS%20GYM!5e0!3m2!1sen!2sin!4v1757849377932!5m2!1sen!2sin"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
