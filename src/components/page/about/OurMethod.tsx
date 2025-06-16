import { FaRocket, FaHandsHelping, FaBookOpen, FaLightbulb, FaHeart, FaSmile } from 'react-icons/fa';

const methods = [
  {
    icon: <FaRocket className="text-indigo-600 text-xl" />,
    title: 'Ignite Passion and Potential',
    description: 'At Pithon Kids, we transform tutoring into an engaging journey of exploration, turning sparks of curiosity into innovative pursuits.',
  },
  {
    icon: <FaHandsHelping className="text-indigo-600 text-xl" />,
    title: 'Nurture Unique Talents',
    description: 'We embrace each child’s individual gifts and drive them far beyond the ordinary, ensuring no talent goes unseen or undeveloped.',
  },
  {
    icon: <FaHeart className="text-indigo-600 text-xl" />,
    title: 'Encourage Meaningful Learning',
    description: 'Through diverse learning paths, we inspire confident exploration in areas like technology and math, often overlooked by traditional systems.',
  },
  {
    icon: <FaBookOpen className="text-indigo-600 text-xl" />,
    title: 'Advance Future-Ready Skills',
    description: 'Our programs are crafted to align with a rapidly evolving world, emphasizing skills that resonate with children’s passions and today’s tech demands.',
  },
  {
    icon: <FaLightbulb className="text-indigo-600 text-xl" />,
    title: 'Inspire Creative Confidence',
    description: 'Learning becomes an exciting adventure that fuels curiosity, cultivates creativity, and builds confidence in problem-solving and coding.',
  },
  {
    icon: <FaSmile className="text-indigo-600 text-xl" />,
    title: 'Transform Learning Attitudes',
    description: 'We foster a love for learning by making math meaningful and technology fun, ensuring children view challenges as opportunities for growth.',
  },
];

export default function OurMethods() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Methodology</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Our approach is rooted in excellence, accountability, and continuous improvement to drive successful outcomes.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {methods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div>{method.icon}</div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">{method.title}</h4>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}