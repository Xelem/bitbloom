import React, { useState } from "react";

interface ToogleInputProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
  defaultValue: boolean;
}

const ToogleInput: React.FC<ToogleInputProps> = ({
  labelTitle,
  labelStyle,
  containerStyle,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const updateToogleValue = (value: boolean) => {
    setValue(!value);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={() => updateToogleValue(value)}
        />
      </label>
    </div>
  );
};

export default ToogleInput;
