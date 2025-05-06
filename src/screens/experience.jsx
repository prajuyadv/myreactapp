import React from "react";
import { Briefcase } from "lucide-react";
import Navbar from "../components/navBar";

const Experience = ({ isFromHome }) => {
  return (
    <>
      {!isFromHome && <Navbar />}

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-700 shadow-sm mb-4">
            <Briefcase size={16} />
            <span>Experience</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-2">Work History</h2>
          <p className="text-lg text-gray-600">
            A timeline of my professional experience as a software developer.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-300 space-y-12 pl-6">
          {experienceData.map((exp, index) => (
            <div className="relative" key={index}>
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-black rounded-full"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-700 font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <SkillBadge key={i} text={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

function SkillBadge({ text }) {
  return (
    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
      {text}
    </span>
  );
}

const experienceData = [
  {
    title: "Intern",
    company: "CVcorp",
    description: "Gone through full stack development training and built mini projects using modern tools and technologies.",
    skills: ["HTML", "CSS", "SQL", "JavaScript"],
  },
  {
    title: "Senior Frontend Developer",
    company: "Capgemini.",
    description: "Led the frontend team in building a SaaS platform. Implemented modern React patterns and mentored developers.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained full-stack web apps for clients. Worked closely with designers and stakeholders.",
    skills: ["JavaScript", "Redux", "Node.js", "MongoDB"],
  },
];

export default Experience;
