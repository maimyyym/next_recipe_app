import React from "react";

export type InputProps = {
  type: string;
  id?: string;
  name: string;
  disabled?: boolean;
  value: string | "";
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  disabled,
  value,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        className="p-2 text-sm bg-white border rounded-md border-lightGray focus:border-2 focus:border-vividRed"
      />
    </div>
  );
};
