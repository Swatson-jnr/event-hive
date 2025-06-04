import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 text-white flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">
        <span className="text-black font-semibold text-xl">Event</span>{" "}
        <span className="text-purple-600 font-semibold text-xl">Hive</span>
      </h1>
      <div className="flex items-center space-x-4">
        <button className="text-black text-sm">Login</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
