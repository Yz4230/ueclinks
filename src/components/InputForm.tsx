import React from "react";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const InputForm: React.FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <div className="m-1">
      <input
        className="h-10 w-full rounded-md border border-gray-200 focus:border-indigo-500 px-3"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default React.memo(InputForm);
