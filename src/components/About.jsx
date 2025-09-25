import React from "react";
import AboutImg from "../assets/About.jpg";
import { Dumbbell, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="dark:bg-dark bg-slate-50 dark:text-white">
      <div className="p-8 mx-auto text-center max-w-7xl">
        
        {/* Heading with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-extrabold text-yellow-500"
        >
          About Us
        </motion.h2>
        <p className="w-20 h-1 mx-auto mb-2 bg-yellow-500"></p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-gray-600 dark:text-gray-200"
        >
          Our gym is dedicated to helping you achieve your fitness goals with
          professional trainers and a motivating environment.
        </motion.p>

        {/* Content Grid */}
        <div className="w-full py-12 md:py-20">
          <div className="px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              
              {/* Left Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-5 text-start"
              >
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  About <span className="text-yellow-500">Mutants Fitness</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-300 md:text-lg">
                  Founded in 2021, Mutants Fitness has been at the forefront of
                  helping people achieve their fitness goals. Our state-of-the-art
                  facilities, expert trainers, and supportive community create the
                  perfect environment for your fitness journey.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="px-5 py-2 font-semibold text-white transition bg-black rounded-md dark:bg-white dark:text-black hover:bg-yellow-500 hover:text-black">
                    Our Story
                  </button>
                 <a href="#our-trainers"><button className="px-5 py-2 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-black hover:text-white">
                    Meet Our Trainers
                  </button></a> 
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.img
                src={AboutImg}
                alt="Gym"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="object-cover mx-auto overflow-hidden transition shadow-lg rounded-xl hover:scale-105 sm:w-full lg:order-last"
              />
            </div>

            {/* Features Section */}
            <div className="grid gap-6 mt-16 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: <Dumbbell className="w-12 h-12 text-yellow-500" />,
                  title: "Our Mission",
                  desc: "To inspire and empower individuals to reach their full potential through fitness, fostering a healthier and happier community.",
                },
                {
                  icon: <Users className="w-12 h-12 text-yellow-500" />,
                  title: "Our Community",
                  desc: "We pride ourselves on creating a welcoming, inclusive environment where members support and motivate each other to achieve their goals.",
                },
                {
                  icon: <Target className="w-12 h-12 text-yellow-500" />,
                  title: "Our Approach",
                  desc: "We combine cutting-edge equipment, personalized training programs, and nutritional guidance to help you achieve sustainable results.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 space-y-4 transition bg-white rounded-lg shadow-md dark:bg-dark hover:shadow-yellow-600"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
