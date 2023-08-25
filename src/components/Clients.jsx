import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <div className="w-full flex justify-between items-center" id="clients">
      {clients.map((client) => (
        <img
          key={client.id}
          src={client.logo}
          alt={client.id}
          className="w-[20%] lg:max-w-[12rem]"
        />
      ))}
    </div>
  );
};

export default Clients;
