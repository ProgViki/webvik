import React from 'react';
import Footer from './Footer';

type Link = {
  name: string;
  url?: string; // optional if you plan to add actual URLs later
};

interface FooterLinksProps {
  links: Link[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  console.log("FooterLinks", links);
  return (
    <>
      {links.map((link) => (
        <li
          key={link.name}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
        >
          <a href={link.url || "#"}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;
