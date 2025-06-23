
'use client'

import React, { FormEvent, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">

        <button onClick={onClose} className="absolute top-2 right-2 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>


        <h3 className='text-black'>Your email has been sent</h3>

      </div>
    </div>
  );
};

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    return formJson;
  }

  async function errorHandler(response: Response) {
    if (!response.ok) {
      let errorMessage = `Error ${response.status}`;

      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch {
        try {
          const text = await response.text();
          if (text) {
            errorMessage = text;
          }
        } catch {
          // fallback stays as is
        }
      }

      throw new Error(errorMessage);
    }

    return response.json().catch(() => ({}));
  }

  
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = getFormData(e)
    console.log(payload)

    // send to api
    try{
      const response = await fetch(
        'https://mailjet-api-280673911842.us-central1.run.app/api/send-mail',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      await errorHandler(response);
      setIsModalOpen(true);

    }
    catch(error){
      console.error('Error:', error);
      throw error;
    }
    

  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shoot us a message to register!</h2>
          <p className="mt-2 text-base text-gray-500">
            We will always get back to you within 24hrs
          </p>
        </div>
        <form className="mt-10 max-w-2xl mx-auto space-y-6" onSubmit={handleSubmitForm}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-black"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-black"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-black"
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
                type="tel"
                id="phone"
                name="phoneNumber"
                className="block w-3/4 rounded-r-md border border-gray-300 p-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
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
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 text-black"
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
    </>
  );
};

export default Register;
