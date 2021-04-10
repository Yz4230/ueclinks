import React from "react";

type Props = {
  checked: boolean;
  label: string;
  onChange: (value: boolean) => void;
};

const CheckBox: React.FC<Props> = ({ checked, label, onChange }) => {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => onChange(!checked)}
    >
      <input
        type="checkbox"
        className="mr-1 h-5 w-5"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label}
    </div>
  );
};

export default CheckBox;
