import React from 'react';
const TawhidSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hi, I'm Yasin Bokth Tawhid a passionate front end developer with a
            love for creating beautiful and functional solutions. I specialize
            in full Stack Developer and I'm always eager to learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* About Me Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Who Am I?
              </h3>
              <p className="text-gray-600">
                I'm a front end developer based in sylhet. I have a strong
                background in Developer and a passion for full stack I'm always
                looking for new challenges and opportunities to grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                My Skills
              </h3>
              <p className="text-gray-600">
                I specialize in [Your Skills], including [Skill 1], [Skill 2],
                and [Skill 3]. I'm also proficient in [Tools/Technologies].
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                My Journey
              </h3>
              <p className="text-gray-600">
                I started my journey in 2021 and have since worked on 20+
                projects. I'm passionate about cooding and always strive to
                deliver the best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TawhidSection;
