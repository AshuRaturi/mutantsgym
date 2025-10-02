import React, { useState } from "react";
import { motion } from "framer-motion";
import BannerImg from "../assets/hero.jpg";
import emailjs from "@emailjs/browser";
import { ReactTyped } from "react-typed";


const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const Hero = () => {
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
        "service_bceo99f",
        "template_2sssf0f",
        templateParams,
        "gkZnRh_C81nHcfpoH"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Try again.");
        setLoading(false);
      });
  };
  

  return (
    <section style={BgStyle} className="dark:bg-black dark:text-white">
      <div className="bg-white/10 dark:bg-black/60">
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto max-w-7xl md:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-5 text-center md:w-1/2 md:text-left"
          >
            <p className="text-lg text-yellow-500 md:text-2xl">
              Start Your Fitness Journey
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              <ReactTyped
                strings={[
                  "Your Fitness Journey Begins!",
                  "Train Hard, Stay Strong",
                  // "Transform Your Body, With Mutants",
                ]}
                typeSpeed={70}
                backSpeed={30}
                loop
              />
            </h1>
            <p className="text-gray-200 md:pr-12">
              Join us today and start your fitness journey with expert trainers
              and state of the art facilities.
            </p>
            <button>
              <a
                href="#pricing"
                className="px-5 py-3 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-white"
              >
                View Plans
              </a>
            </button>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2"
          >
            <div className="max-w-md mx-auto rounded-lg shadow-2xl bg-white/30 dark:bg-black/30 backdrop-blur-sm sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <span className="text-2xl font-bold text-center text-yellow-500">
                  Let's Train Together
                </span>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm dark:bg-dark sm:text-sm"
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
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm dark:bg-dark sm:text-sm"
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
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm dark:bg-dark sm:text-sm"
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
                    className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm dark:bg-dark sm:text-sm"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
