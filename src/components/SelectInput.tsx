import React from "react";

type Props = {
  value: string;
  label: string;
  name: string;
  error?: string;
  onChange: (value: string) => void;
};

// initial cities values
const cities = [
  "Бохтар",
  "Бустон",
  "Вахдат",
  "Гиссар",
  "Гулистан",
  "Душанбе",
  "Истаравшан",
  "Истиклол",
  "Исфара",
  "Канибадам",
  "Куляб",
  "Левакант",
  "Нурек",
  "Пенджикент",
  "Рогун",
  "Турсунзаде",
  "Хорог",
  "Худжанд",
];

// cities options loop
const citiesOptions = cities.map((city, index) => (
  <option key={index} value={city}>
    {city}
  </option>
));

export default function SelectInput({
  value,
  onChange,
  label,
  name,
  error,
}: Props) {
  return (
    <div className="relative flex flex-col w-full mb-8">
      {/* selector */}
      <select
        id={name}
        className={`w-full px-4 border-2 rounded-md h-11 placeholder:text-primaryWhite text-grayDark ${
          error ? "border-redError" : "border-grayLight"
        } peer focus:outline-none ${
          error ? "focus:border-redError" : "focus:border-mainBlue"
        }`}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value=""></option>
        {citiesOptions}
      </select>
      {/* label */}
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
