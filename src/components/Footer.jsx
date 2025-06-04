import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <h1>
        <span>Event</span> <span>Hive</span>
      </h1>
      <form action="">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="text-[#fff]"
        />
        <button type="submit">Subscribe</button>
      </form>
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Get In Touch</span>
        <span>FAQs</span>
      </div>
      <hr />
      <div>
        <div>
          <button>English </button>
          <button>French </button>
          <button>Hindi </button>
        </div>
        <div>
          <Linkedin color="white" />
          <Instagram color="white" />
          <Facebook color="white" />
        </div>
        <p className="text-white text-end">
          Non Copyrighted© 2025Upload by Sandra Allotey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
