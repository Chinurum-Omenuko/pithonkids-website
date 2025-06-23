import React from 'react';
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            A little about our big idea
          </h2>

          <p className="mt-6 text-lg text-gray-600">
             At Pithon Kids, we don’t just tutor—we transform. We are a headstart program dedicated to pushing children far above average by nurturing their unique passions and talents—especially the ones traditional school systems often overlook.
          </p>
          <p className="mt-6 text-lg text-gray-600">
             As passionate educators and technocrats, we resonate deeply with Mandela's words.. “Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela. We founded Pithon Kids in response to a troubling trend we couldn’t ignore: growing class sizes, shrinking one-on-one attention, and a school system that struggles to adapt to our rapidly evolving, tech-driven world.
          </p>
          <p className="mt-6 text-lg text-gray-600">
             We saw kids lose interest in learning—especially in technology, coding, and math—not because they lacked potential, but because they were never truly introduced to them in a meaningful, exciting way.
          </p>

        </div>
        <div>
          <Image
            src="/images/gallery/img-1.webp"
            alt="Team photo"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Timeline Section */}
      {/* <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 text-sm text-gray-600 border-t border-gray-200 pt-10">
          <div>
            <p className="text-indigo-600 font-semibold">September 2023</p>
            <h4 className="mt-2 font-semibold text-gray-900">In house Tutoring</h4>
            <p className="mt-1">We started by chinurum doing in house french tutoring to kids as near as ottawa south and as far as orleans</p>
          </div>
          <div>
            <p className="text-indigo-600 font-semibold">June 2024</p>
            <h4 className="mt-2 font-semibold text-gray-900">Secured $65m in funding</h4>
            <p className="mt-1">Provident quia ut esse. Cumque minima impedit sapiente.</p>
          </div>
          <div>
            <p className="text-indigo-600 font-semibold">Feb 2022</p>
            <h4 className="mt-2 font-semibold text-gray-900">Released beta</h4>
            <p className="mt-1">Non necessitatibus aliquid. Hic deleniti dolorem quia.</p>
          </div>
          <div>
            <p className="text-indigo-600 font-semibold">Dec 2022</p>
            <h4 className="mt-2 font-semibold text-gray-900">Global launch of product</h4>
            <p className="mt-1">Ut ipsa sint distinctio. Architecto voluptatem hic.</p>
          </div>
        </div>
      </div> */}

    </section>
  );
};

export default AboutSection;
