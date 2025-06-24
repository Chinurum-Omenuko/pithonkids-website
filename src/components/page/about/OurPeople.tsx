import Image from "next/image";

export default function OurPeople() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">

      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chinurum Omenuko</h2>
            <p className="text-gray-600 mb-4">
              A polyglot technophile and educator, Chinurum Omenuko is fluent in English, French, Igbo, and Nigerian Pidgin. He holds dual degrees in Communications and Web Development and has years of experience teaching coding (Python, C#), French, and even coding in French.
            </p>
            <p className="text-gray-600 mb-4">
              His journey began at age 6, when his father brought home the family’s first desktop computer. From that moment, he was hooked—exploring every corner of the machine day and night. That first taste of tech shaped a lifelong passion, and today he’s on a mission to give children that same early spark.
            </p>
          </div>
          <div>
            <Image
              src="/images/people/chinurum.jpeg"
              alt="People chatting on couch"
              className="rounded-xl w-full object-cover"
              width={500}
              height={100}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Text and top-right image */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Joy Ugo</h2>
            
              <p className="text-gray-600 mb-4">
                With a background in Psychology and Biology, Joy Ugo brings a unique blend of child development expertise and real-world data science experience. A seasoned healthcare data specialist, she’s trained adults across major hospital networks in Canada.
              </p>
              <p className="text-gray-600 mb-4">
                She started out thinking math wasn’t for her—but her career proved otherwise. Now she’s committed to showing kids the beauty and purpose of math in every industry, and making sure no child grows up thinking they’re “just not a math person.”
              </p>

            </div>
            <div>
            
              <Image
                src="/images/people/joy_ugo.JPG"
                alt="People chatting on couch"
                className="rounded-xl w-full object-cover"
                width={500}
                height={300}
              />
              
            </div>
          </div>

          
        </div>

      </div>
    </section>
  );
}
