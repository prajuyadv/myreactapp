import React from "react";
import person from "../assets/person.png";
import Navbar from "../components/navBar";

const About = ({ isFromHome }) => {
  return (
    <>
      {!isFromHome && <Navbar />}

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm font-medium text-gray-700 mb-4 shadow-sm">
            <img src={person} alt="person icon" className="h-4 w-4" />
            About Me
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Who I Am</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a software developer with 3+ years of experience building web
            applications. I specialize in JavaScript, React, and Node.js with a
            focus on creating responsive, accessible, and performant user
            interfaces.
          </p>
        </div>

        {/* Skill Sections */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">
              I craft elegant and responsive interfaces with React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
              I develop APIs and backends with Node.js, Express, and databases like MongoDB and PostgreSQL.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              I thrive on solving complex challenges through clean, scalable code.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
              "Express", "MongoDB", "PostgreSQL", "HTML/CSS", "Tailwind CSS",
              "Git", "Docker", "AWS", "CI/CD", "Jest", "React Testing Library",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-sm text-gray-700 font-medium px-4 py-1 rounded-full hover:bg-gray-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
