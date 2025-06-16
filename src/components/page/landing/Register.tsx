'use client'

import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    message: '',
    acceptedPolicy: false,
  })

  const handleFormInput = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  async function errorHandler(response: Response) {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || response.statusText || 'An error occurred';
      throw new Error(errorMessage);
    }
    return response.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://pithonkids-994768609233.us-central1.run.app/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      return await errorHandler(response);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shoot us a message to register!</h2>
        <p className="mt-2 text-base text-gray-500">
          We will always get back to you within 24hrs
        </p>
      </div>

      <form className="mt-10 max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              onChange={handleFormInput}
              type="text"
              id="first-name"
              value={formData.firstName}
              name="first-name"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              onChange={handleFormInput}
              value={formData.lastName}
              type="text"
              id="last-name"
              name="last-name"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            onChange={handleFormInput}
            type="email"
            value={formData.email}
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <select className="block w-1/4 rounded-l-md border border-gray-300 bg-gray-50 text-gray-700 p-2">
              <option>CA</option>
              <option>US</option>
              <option>Other</option>
              {/* Add more countries */}
            </select>
            <input
              onChange={handleFormInput}
              type="tel"
              name="phone"
              value={formData.phonenumber}
              id="phone"
              className="block w-3/4 rounded-r-md border border-gray-300 p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Tell us what you're interested in!
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          ></textarea>
        </div>

        {/* <div className="flex items-start">
          <input
            onChange={handleFormInput}
            value={formData.acceptedPolicy}
            type="checkbox"
            id="agreement"
            name="agreement"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
            By selecting this, you agree to our <a href="#" className="text-indigo-600 underline">privacy policy</a>.
          </label>
        </div> */}

        <div>
          <button
            type="submit"
            className="w-full bg-[#004fcc] hover:bg-[#004384] text-white font-semibold py-2 px-4 rounded-md shadow"
          >
            Let’s get started!
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;


