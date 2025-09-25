import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const phoneNumber = "919897829686"; // WhatsApp number with country code

  const pricingJson = [
    {
      plan: "Monthly",
      text: "For casual gym-goers",
      price: "₹ 1500/Month",
      t1: "Access to all gym facilities",
      t2: "Initial diet plan",
      t3: "Health and fitness tips",
    },
    {
      plan: "Quarterly",
      text: "3 Months",
      price: "₹ 3499",
      t1: "All Basic features",
      t2: "Group fitness classes",
      t3: "Personalized workout plan",
    },
    {
      plan: "Half Yearly",
      text: "6 Months",
      price: "₹ 5999",
      t1: "All Pro features",
      t2: "Personal training sessions",
      t3: "Nutrition consultation",
    },
  ];

  const handleWhatsApp = (plan) => {
    const message = `Hi Mutants Team, I’ve been exploring fitness options and the *${plan}* membership plan seems like the perfect fit for my goals. I’m eager to get started and would appreciate if you could share the joining formalities.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="pricing"
      className="p-8 pt-10 pb-20 text-center bg-slate-50 dark:bg-dark dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-yellow-500">
          Membership Pricing
        </h2>
        <p className="w-20 h-1 mx-auto mb-12 bg-yellow-500"></p>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingJson.map((item, idx) => (
            <motion.div
              key={item.plan}
              className="p-6 border rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-yellow-500">
                {item.plan}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.text}
              </p>
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
             transition-all duration-300 
             animate-bounce"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
