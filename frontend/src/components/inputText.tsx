import React, { useState } from "react";

interface InputTextValue {
  labelTitle: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue: string;
  placeholder?: string;
}

const InputText: React.FC<InputTextValue> = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
}) => {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val: string) => {
    setValue(val);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input  input-bordered w-full "
      />
    </div>
  );
};

export default InputText;
