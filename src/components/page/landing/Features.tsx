import { PersonStanding, BookOpenCheck, Hand } from 'lucide-react';

const Features = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20 grid place-content-center">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#004fcc] font-semibold mb-2">Get ahead for the future NOW</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Maths and Coding made fun
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Awesome for kids age 5 and older.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div>
         
          <div className="flex items-center mb-4 text-[#004fcc]">
            <PersonStanding className="mr-2" size={20} />
            <h3 className="font-semibold text-gray-900">1OO% Online Personal Classes</h3>
          </div>
          <p className="text-gray-500 mb-4">
          Ready to learn from the comfort of your couch/table/bedroom? Our online personal classes gives you the option to bring world-class education right to your living room. Dive into engaging sessions with our awesome tutors, making every lesson a fun-filled adventure!
          </p>

        </div>

        {/* Feature 2 */}
        <div>
          <div className="flex items-center mb-4 text-[#004fcc]">
            <BookOpenCheck className="mr-2" size={20} />
            <h3 className="font-semibold text-gray-900">Expert Tutors</h3>
          </div>
          <p className="text-gray-500 mb-4">
          Our skilled and passionate tutors who are both experienced in their respective fields and have years of practice of the subjects. They are here to guide you through every step of your learning journey with personalized attention and learning pace.
          </p>

        </div>

        {/* Feature 3 */}
        <div>
          <div className="flex items-center mb-4 text-[#004fcc]">
            <Hand className="mr-2" size={20} />
            <h3 className="font-semibold text-gray-900">Fun & Interactive Lessons</h3>
          </div>
          <p className="text-gray-500 mb-4">
          Engage in our interactive lessons designed to make learning enjoyable and memorable. Experience a vibrant educational environment that caters to your curiosity and enthusiasm for learning.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Features;