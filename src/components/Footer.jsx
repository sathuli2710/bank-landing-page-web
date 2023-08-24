import React from "react";
import { CopyrightIcon, logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const FooterSection = ({ title = "", links = [] }) => {
  return (
    <div>
      <h3 className="font-[500] text-[1.125rem] leading-[1.6875rem] mb-6 w-max">
        {title}
      </h3>
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
    <div className="w-full grid place-items-center">
      <div className="w-full flex flex-col lg:flex-row items-center gap-y-[1.25rem] justify-evenly">
        <div className="grid place-items-center">
          <img
            src={logo}
            alt="hoobank logo"
            className="w-[15.625rem] h-[4.5rem]"
          />
          <p className="text-center lg:text-start text-[1.125rem] leading-[2rem] text-white text-opacity-70 max-w-[19.5rem] mt-[1.875rem]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="md:w-full flex flex-col md:flex-row items-start md:justify-evenly gap-y-[1.25rem] xl:max-w-[90rem]">
          {footerLinks.map((footerLink) => (
            <FooterSection
              key={footerLink.title}
              title={footerLink.title}
              links={footerLink.links}
            />
          ))}
        </div>
      </div>
      <div className="border-b border-[#3F3E45] my-[2.5rem] w-full"></div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mb-[1.875rem] gap-y-4">
        <span className="flex flex-col lg:flex-row items-center text-white text-opacity-70">
          <span className="inline-flex items-center">
            Copyright <CopyrightIcon className="mx-4" />
          </span>
          <span>2023 HooBank. All Rights Reserved.</span>
        </span>
        <span className="flex items-center gap-x-[1.875rem]">
          {socialMedia.map((socialMediaDetail) => (
            <a href={socialMediaDetail.link}>
              <img
                key={socialMediaDetail.id}
                src={socialMediaDetail.icon}
                alt={socialMediaDetail.id}
                className="w-[1.3125rem] h-[1.3125rem]"
              />
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
