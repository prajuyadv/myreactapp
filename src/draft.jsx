import React from "react";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-300 text-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Open Works Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold">Open Works</span>
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <button className="bg-black text-white px-3 py-1 rounded">Home</button>
          <button className="hover:underline">Open Position</button>
          <button className="hover:underline">New Listing</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Become a Freelance Professional
        </h1>
        <p className="text-lg md:text-xl">The Best Place to Find Open Work Positions</p>
      </section>

      {/* Browse Options */}
      <section className="bg-gray-100 flex flex-col md:flex-row justify-center gap-8 py-12 px-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">Find Work</h3>
          <p className="text-gray-600 mb-4">Browse from thousands of listed open positions.</p>
          <button className="bg-black text-white px-4 py-2 rounded">Browse Positions</button>
        </div>

        <div className="bg-purple-100 p-6 rounded-xl shadow-md w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">List a Position</h3>
          <p className="text-gray-700 mb-4">Add a position as per your requirements.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">List Work</button>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-blue-50 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">Browse Open Positions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <p className="text-sm text-gray-600 mb-1">Full Time</p>
            <h3 className="text-lg font-bold">Java Developer</h3>
            <p className="text-sm text-gray-600 my-2">
              We are looking for a skilled Java Developer to become a part of our team in ...
            </p>
            <p className="text-blue-600 text-sm mb-1">$100/hour</p>
            <p className="text-sm text-gray-500 mb-4">Location: Boston</p>
            <button className="bg-purple-500 text-white px-4 py-1 rounded">Details</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <p className="text-sm text-gray-600 mb-1">Part Time</p>
            <h3 className="text-lg font-bold">Python Developer</h3>
            <p className="text-sm text-gray-600 my-2">
              We are looking for a skilled Python Developer to become a part of our team in ...
            </p>
            <p className="text-blue-600 text-sm mb-1">$200/hour</p>
            <p className="text-sm text-gray-500 mb-4">Location: Virginia</p>
            <button className="bg-purple-500 text-white px-4 py-1 rounded">Details</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
            <p className="text-sm text-gray-600 mb-1">Contractual</p>
            <h3 className="text-lg font-bold">Laravel Developer</h3>
            <p className="text-sm text-gray-600 my-2">
              We are looking for a skilled Back-end Developer to become a part of our team in ...
            </p>
            <p className="text-blue-600 text-sm mb-1">$100/hour</p>
            <p className="text-sm text-gray-500 mb-4">Location: Washington</p>
            <button className="bg-purple-500 text-white px-4 py-1 rounded">Details</button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <div className="text-center py-10">
        <button className="bg-black text-white px-6 py-3 rounded text-lg font-semibold hover:bg-gray-900">
          View All Positions
        </button>
      </div>
    </div>
  );
};

export default App;




// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/hero";
// import HomeCards from "./components/homeCards";
// import Footer from "./components/footer";
// import Listings from "./components/listings";
// import HomePage from "./components/homePage";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path="/" element={<HomePage/>}/>
//       <Route path="/Navbar" element={<Navbar />} />
//       <Route path="/hero" element={<Hero />} />
//       <Route path="/homeCards" element={<HomeCards />} />
//       <Route path="/listings" element={<Listings/>}/>
//       <Route path="/footer" element={<Footer/>}/>
//     </>
//   )
// );

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
