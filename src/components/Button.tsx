import React from "react";

type ButtonProps = {
  type: "outline" | "solid";
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold 
            rounded-lg  border disabled:opacity-50 disabled:pointer-events-none
        ${
          type === "outline"
            ? "border-primary-500 text-primary-500 hover:border-accent hover:text-accent"
            : "border-transparent bg-blue-600 text-primary-500 hover:bg-blue-700"
        }
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
