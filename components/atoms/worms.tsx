import React from "react";
export const Worms: React.FC = ({ children }) => (
  <span
    className="text-gray-100"
    title="Worms balance"
  >{`${children} 🐛`}</span>
);
