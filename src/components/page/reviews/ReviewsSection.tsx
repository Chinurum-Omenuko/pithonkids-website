
'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const initialTestimonials = [
  {
    name: "Emily Selman",
    date: "July 16, 2021",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!",
  },
  {
    name: "Hector Gibbons",
    date: "July 12, 2021",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.",
  },
  {
    name: "Mark Edwards",
    date: "July 6, 2021",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    review: "Really happy with look and options of these icons. I've found uses for them everywhere in my recent projects. I hope there will be 20px versions in the future!",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex space-x-1 text-yellow-400 mt-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? 'currentColor' : 'none'}
        strokeWidth={i < rating ? 0 : 1.5}
      />
    ))}
  </div>
);

const ReviewSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: '',
  });
  const [underConstruction, setUnderConstruction] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...formData,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
    setTestimonials([newReview, ...testimonials]);
    setFormData({ name: '', img: '', rating: 5, review: '' });
    setShowForm(false);
  };

  if (underConstruction) {
    return (
      <div className="text-center py-16">
        <p className="text-2xl font-bold text-black">
          This section is under construction.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-16 border-t border-b">
      <div className="text-center mb-12">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          We have worked with some amazing families and students
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {showForm ? "Cancel" : "Add Your Review"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12 px-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <select
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Stars</option>
            ))}
          </select>
          <textarea
            placeholder="Your Review"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Submit Review
          </button>
        </form>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex space-x-4 py-8 border-b border-gray-200 last:border-b-0"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.date}</div>
              <StarRating rating={t.rating} />
              <p className="mt-2 text-sm text-gray-700">{t.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
