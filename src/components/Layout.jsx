import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid place-items-center px-5 md:px-[2.5rem]">
      {children}
    </div>
  );
};

export default Layout;
