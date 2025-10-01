import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const phoneNumber = "919897829686"; // WhatsApp number with country code

  // Strength Plans
  const strengthPlans = [
    {
      plan: "1 Month",
      price: "₹ 1500",
      t1: "Strength training access",
      t2: "Initial diet plan",
      t3: "Basic fitness tips",
    },
    {
      plan: "3 Months",
      price: "₹ 3500",
      t1: "Strength package",
      t2: "Group training support",
      t3: "Workout tracking",
    },
    {
      plan: "6 Months",
      price: "₹ 5500",
      t1: "Extended training",
      t2: "Diet consultation",
      t3: "Priority access",
    },
    {
      plan: "1 Year",
      price: "₹ 9500",
      t1: "Full year membership",
      t2: "Personalized support",
      t3: "Progress monitoring",
    },
  ];

  // Cardio + Strength Plans
  const cardioPlans = [
    {
      plan: "1 Month",
      price: "₹ 2000",
      t1: "Cardio & strength training",
      t2: "Diet consultation",
      t3: "Weekly progress check",
    },
    {
      plan: "3 Months",
      price: "₹ 4500",
      t1: "Combo training package",
      t2: "Group cardio sessions",
      t3: "Fitness guidance",
    },
    {
      plan: "6 Months",
      price: "₹ 6500",
      t1: "Half-year combo plan",
      t2: "Nutrition support",
      t3: "Progress tracking",
    },
    {
      plan: "1 Year",
      price: "₹ 11000",
      t1: "Annual combo plan",
      t2: "Personalized coaching",
      t3: "Full progress monitoring",
    },
  ];

  const handleWhatsApp = (plan) => {
    const message = `Hi Mutants Team, I’m interested in the *${plan}* membership plan. Please share the joining formalities.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Reusable Plan Card
  const PlanCard = ({ item, idx }) => (
    <motion.div
      key={item.plan}
      className="p-6 border rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-500 hover:-translate-y-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-yellow-500">{item.plan}</h3>
      <h1 className="mt-4 mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
        {item.price}
      </h1>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li>✅ {item.t1}</li>
        <li>✅ {item.t2}</li>
        <li>✅ {item.t3}</li>
      </ul>
      <button
        onClick={() => handleWhatsApp(item.plan)}
        className="w-full px-4 py-2 mt-6 font-semibold text-black 
          bg-gradient-to-r from-yellow-400 to-yellow-500 
          rounded-md shadow-md 
          hover:from-yellow-500 hover:to-yellow-400 
          hover:shadow-[0_0_15px_rgba(255,215,0,0.7)] 
          transition-all duration-300 animate-bounce"
      >
        Choose Plan
      </button>
    </motion.div>
  );

  return (
    <section id="pricing" className="p-8 pt-10 pb-20 bg-slate-50 dark:bg-dark dark:text-white">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-yellow-500">Membership Pricing</h2>
        <p className="w-20 h-1 mx-auto mb-12 bg-yellow-500"></p>

        {/* Strength Plans */}
        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Strength Plans</h3>
        <div className="grid gap-8 mb-12 md:grid-cols-4">
          {strengthPlans.map((item, idx) => (
            <PlanCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Cardio & Strength Plans */}
        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Cardio & Strength Plans</h3>
        <div className="grid gap-8 md:grid-cols-4">
          {cardioPlans.map((item, idx) => (
            <PlanCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
