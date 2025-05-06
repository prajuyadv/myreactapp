import React from "react";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import Navbar from "../components/navBar";

const Contact = ({ isFromHome }) => {
  return (
    <>
      {isFromHome ? "" : <Navbar />}

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Connect</h2>
          <p className="text-lg text-gray-600">
            Whether you want to talk tech, collaborate, or just say hi — feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Card */}
          <div className="bg-white shadow-md rounded-xl p-6 space-y-5">
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-indigo-600" />
                <a href="mailto:prajuyadav619@gmail.com" className="hover:underline">
                  prajuyadav619@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin size={20} className="text-blue-700" />
                <a
                  href="https://www.linkedin.com/in/praju-kumar-yadav-patnam-63899b1b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/prajukumaryadavpatnam
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Github size={20} className="text-black" />
                <a
                  href="https://github.com/prajuyadv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/prajuyadv
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
            <p className="text-gray-600">
              I’m always excited to hear about new opportunities and projects. Feel free to drop me an email or check out my resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:prajuyadav619@gmail.com"
                className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition text-sm"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="/Praju_kumar_CV.pdf"
                download
                className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100 transition text-sm"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
