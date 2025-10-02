import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const trainers = [
  {
    name: "Aman Juyal",
    role: "Strength & Conditioning Coach",
    img: "/aman3-new.jpeg",
    desc: "10+ years of experience in bodybuilding, powerlifting and functional training.",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Harshita Kandari",
    role: "Zumba & Cardio Specialist",
    img: "/logo.png",
    desc: "Certified Zumba instructor helping people stay fit with fun dance workouts.",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Amit Thapa",
    role: "Boxing Coach",
    img: "/logo.png",
    desc: "Professional fighter with 8 years of experience in boxing and mixed martial arts.",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
];

const OurTrainers = () => {
  return (
    <section id="our-trainers" className="py-16 text-white bg-black">
      <div className="px-6 mx-auto max-w-7xl">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meet Our Trainers
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              className="p-6 text-center transition-transform duration-500 bg-gray-900 shadow-lg rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,0,0.5)] group perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="object-cover w-40 h-40 mx-auto border-4 border-yellow-400 rounded-full transition-transform duration-500 transform-gpu group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,0,0.7)]"
              />
              <h3 className="mt-4 text-2xl font-bold">{trainer.name}</h3>
              <p className="font-semibold text-yellow-400">{trainer.role}</p>
              <p className="mt-3 text-sm text-gray-400">{trainer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTrainers;
