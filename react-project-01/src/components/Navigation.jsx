import React from "react";

const Navigation = () => {
  const navHeadings = [
    { id: 1, heading: "Menu" },
    { id: 2, heading: "Location" },
    { id: 3, heading: "About" },
    { id: 4, heading: "Contact" },
  ];

  return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul>
          {navHeadings.map((navHead) => (
            <li key={navHead.id} href="#">
              {navHead.heading}
            </li>
          ))}
        </ul>

        <button>Login</button>
      </nav>
  );
};

export default Navigation;
