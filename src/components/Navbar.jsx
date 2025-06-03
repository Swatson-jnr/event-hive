import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1 className="font-semibold ">
        <span>Event</span>
        <span>Hive</span>
      </h1>
      <div>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
