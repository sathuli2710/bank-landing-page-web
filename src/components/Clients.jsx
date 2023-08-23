import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <div
      className="flex gap-x-[100px] items-center justify-center my-[40px] max-sm:my-[20px] "
      id="clients"
    >
      {clients.map((client) => (
        <img
          key={client.id}
          src={client.logo}
          alt={client.id}
          className="w-[192px]"
        />
      ))}
    </div>
  );
};

export default Clients;
