import React from "react";
import data from "../constants/jobs.json";
import Navbar from "../components/navBar";

const Project = ({ isFromHome }) => {
  return (
    <>
      {!isFromHome && <Navbar />}

      <section className="bg-blue-50 px-6 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-indigo-600 text-center mb-12">
            My Recent Works
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  {item.languages && (
                    <p className="text-indigo-500 font-medium mb-4">
                      {item.languages}
                    </p>
                  )}

                  {item.location && (
                    <p className="text-sm text-orange-700 mb-4">
                      📍 {item.location}
                    </p>
                  )}
                </div>

                <div className="mt-auto">
                  {item.Live && (
                    <button
                      onClick={() => window.open(item.Live, "_blank")}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm transition"
                    >
                      View Live
                    </button>
                  )}
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
