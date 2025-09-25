import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactModal = ({ plan, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      plan,
      from_name: formData.name,
      from_email: formData.email,
      from_mobile: formData.mobile,
      message: formData.message,
    };

    emailjs.send(
      'service_bceo99f' ,   // replace with your EmailJS service ID
      'template_2sssf0f',  // replace with your EmailJS template ID
      templateParams,
      'gkZnRh_C81nHcfpoH'    // replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setLoading(false);
      onClose();
    })
.catch((err) => {
  console.error("EmailJS Error:", err);
});
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className='bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg w-11/12 max-w-md p-6 sm:p-8'
      >
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold text-yellow-500'>Choose Your Plan</h2>
          <button onClick={onClose} className='text-xl font-bold'>×</button>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input type='hidden' name='plan' value={plan} />

          <p className='mb-2 text-gray-700 dark:text-gray-300'>Plan Selected: <span className='font-semibold'>{plan}</span></p>

          {/* Full Name */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 text-start'>Full Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm'
              placeholder='John Doe'
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 text-start'>Email Address</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm'
              placeholder='John.doe@example.com'
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 text-start'>Mobile Number</label>
            <input
              type='tel'
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
              className='w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm'
              placeholder='+91 7895****90'
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 text-start'>Message</label>
            <textarea
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 mt-1 border border-gray-300 rounded-md dark:bg-dark sm:text-sm'
              placeholder='Your message here...'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='px-4 py-2 font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 disabled:opacity-50'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactModal;
