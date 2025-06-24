'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { FormEvent } from 'react';

export default function ContactForm() {

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
      alert("Message sent")

    }
    catch(error){
      console.error('Error:', error);
      throw error;
    }
    

  }

  return (
    <div className="bg-white min-h-screen px-6 py-16 sm:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Panel: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-4 text-gray-600 max-w-md">
              Shoot us a quick message and we will get back to you within 24 hours.
            </p>
          </div>
          <div className="space-y-6 text-gray-700 text-sm">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-500" />
              <div className="phone flex flex-col">
                <p> <a href="tel:6474099936">+1 (647) 409-9936</a></p>
                <p> <a href="tel:6132914770">+1 (613) 291-4770</a></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-500" />
              <p>pithonkids@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <form onSubmit={handleSubmitForm} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              required
              className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-black inline-flex items-center justify-center px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
