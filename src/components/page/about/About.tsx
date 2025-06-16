import React from 'react';

const teamMembers = [
  {
    name: "Joy Ugo",
    title: "Co-Founder",
    image: "/Users/chinurum/Desktop/tech/pkwebsite/pithonkidssite/public/joy_ugo.JPG", // update as needed
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
  {
    name: "Chinurum Omenuko",
    title: "Co-Founder",
    image: "/images/michael.jpg", // update as needed
    bio: "Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio...",
  },
];

const TeamSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left column: Section title and intro */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About the team</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Right column: Team members (spanning 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-6 border-t pt-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
                <div className="mt-3 flex gap-4">
                  {/* Replace with real icons as needed */}
                  <span className="text-gray-400 text-xl">𝕏</span>
                  <span className="text-gray-400 text-xl">in</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
