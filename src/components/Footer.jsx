import React from "react";
import { CopyrightIcon, logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const FooterSection = ({ title = "", links = [] }) => {
  return (
    <div>
      <h3 className="font-[500] text-[18px] leading-[27px] mb-6">{title}</h3>
      <ul className="flex flex-col gap-y-3 text-white text-opacity-70">
        {links.map((link) => (
          <li>
            <a href={link.link} className="hover-text-gradient">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex items-center gap-x-[140px] max-w-[1170px]">
        <div>
          <img src={logo} alt="hoobank logo" className="w-[250px] h-[72px]" />
          <p className="text-[18px] leading-[32px] text-white text-opacity-70 max-w-[312px] mt-[30px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex items-start gap-x-[180px]">
          {footerLinks.map((footerLink) => (
            <FooterSection
              key={footerLink.title}
              title={footerLink.title}
              links={footerLink.links}
            />
          ))}
        </div>
      </div>
      <div className="border-b border-[#3F3E45] my-[40px] w-[1170px]"></div>
      <div className="flex justify-between items-center w-[1170px] mb-[30px]">
        <span className="flex items-center text-white text-opacity-70">
          <span>Copyright</span> <CopyrightIcon className="mx-4" />
          <span>2023 HooBank. All Rights Reserved.</span>
        </span>
        <span className="flex items-center gap-x-[30px]">
          {socialMedia.map((socialMediaDetail) => (
            <a href={socialMediaDetail.link}>
              <img
                key={socialMediaDetail.id}
                src={socialMediaDetail.icon}
                alt={socialMediaDetail.id}
                className="w-[21px] h-[21px]"
              />
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
