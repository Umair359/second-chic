import React from "react";
import "./InputFeild.css";
const InputFeild = ({ fullWidth = false, type, text, id, important }) => {
  return (
    <div style={fullWidth ? { width: "100%" } : {}} className="input-feild">
      <label for={id}>
        {text}
        {important ? "*" : ""}
      </label>
      <input id={id} type={type} placeholder={`Enter Your ${text}`} />
    </div>
  );
};

export default InputFeild;
