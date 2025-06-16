import React from 'react';
import Image from 'next/image';


const Classes = () => {
  return (
    <section className="bg-[#f8f9fa] py-10 px-4 sm:px-6 lg:px-20 lg:h-screen grid place-content-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
      Check out our Classes!
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Our patented padded snack sleeve construction protects your favorite treats from getting
        smooshed during all-day adventures, long shifts at work, and tough travel schedules.
      </p>

      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        {/* Math class */}
        <div>
          <Image src="/images/math.png" alt="Math" width={20} height={10} />
          <p className="text-sm text-gray-700 mt-4">
          Our math tutoring classes offer a unique opportunity for personalized and interactive learning. Experience a tailored educational plan that caters to your specific needs and goals, all facilitated by our dedicated tutor to helping you succeed.
          </p>
        </div>

        {/* Programming class */}
        <div>
          <Image src="/images/coding.png" alt="Programming" width={20} height={10} />
          <p className="text-sm text-gray-700 mt-4">
          Join our Python programming and website development classes. Focused sessions tailored to your learning pace, guided by expert tutors dedicated to your success.
          </p>
        </div>

        {/* English class */}
        <div>
          <Image src="/images/english.png" alt="English" width={20} height={10} />
          <p className="text-sm text-gray-700 mt-4">
          Experience the beauty of language with our English classes. Whether it's improving your grammar, expanding vocabulary or honing communication skills, our expert instructor is here to guide you every step of the way.
          </p>
        </div>

        {/* French class */}
        <div>
          <Image src="/images/french.png" alt="French" width={20} height={10} />
          <p className="text-sm text-gray-700 mt-4">
          Immerse yourself in the French language with our comprehensive classes. From conversation practices to cultural immersion, our courses are designed to enhance your language proficiency and cultural understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Classes;