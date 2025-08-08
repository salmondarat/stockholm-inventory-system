import React from "react";

type AlertProps = {
  type?: "error" | "success" | "info";
  children: React.ReactNode;
};

const Alert: React.FC<AlertProps> = ({ type = "info", children }) => {
  const color =
    type === "error" ? "red" : type === "success" ? "green" : "blue";
  return (
    <div className={`bg-${color}-100 text-${color}-700 p-2 rounded mb-2`}>
      {children}
    </div>
  );
};

export default Alert;
