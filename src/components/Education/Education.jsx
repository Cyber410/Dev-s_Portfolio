import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background and qualifications
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Timeline Line (ends at the bottom of the last card) */}
        <div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white"
          style={{
            height: `calc(100% - 6rem)`, // 6rem = mb-24 (bottom margin of last card)
          }}
        ></div>

        {education.map((edu, idx) => (
          <div
            key={edu.id}
            className="w-full flex flex-col items-center mb-24 relative"
          >
            {/* Timeline Logo (circle) - centered on the line, above the card */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 z-10">
              <div className="bg-gray-400 border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="w-full sm:max-w-lg p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mx-auto mt-12">
              <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-lg text-gray-300 mt-2">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Coursework:</h5>
                <ul className="flex flex-wrap mt-2">
                  {edu.coursework.map((course, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 text-purple-300 font-bold">{edu.grade}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;