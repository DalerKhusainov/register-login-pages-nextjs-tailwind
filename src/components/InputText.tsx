import React from "react";

type Props = {
  value: string;
  label: string;
  name: string;
  error?: string;
  onChange: (value: string) => void;
};

export default function InputText({
  value,
  onChange,
  label,
  name,
  error,
}: Props) {
  return (
    <div className="relative flex flex-col w-full mb-8">
      {/* input */}
      <input
        // value={value}
        type="text"
        placeholder={label}
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 border-2 rounded-md h-11 placeholder:text-primaryWhite text-grayDark ${
          error ? "border-redError" : "border-grayLight"
        } peer focus:outline-none ${
          error ? "focus:border-redError" : "focus:border-mainBlue"
        }`}
      />
      {/* lable */}
      <label
        htmlFor={name}
        className={`absolute left-4 -top-3.5 bg-primaryWhite rounded-md px-1 ${
          error ? "text-redError" : "text-grayLight"
        } text-md transition-all peer-focus:-top-3 ${
          error ? "peer-focus:text-redError" : "peer-focus:text-mainBlue"
        } peer-focus:text-sm`}
      >
        {label}
      </label>
      {/* error message */}
      {error && (
        <p className="absolute left-0 z-10 text-sm -bottom-5 text-redError">
          {error}
        </p>
      )}
    </div>
  );
}
