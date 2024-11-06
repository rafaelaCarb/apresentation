import React from "react";
import NavLink from "./NavLink";

const Menuoverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} key={index} />
        </li>
      ))}
    </ul>
  );
};

export default Menuoverlay;
