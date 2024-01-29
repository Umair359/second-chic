import React from "react";
import "./InputSelect.css";
const InputSelect = ({ fullWidth = false, type, text, id, important }) => {
  return (
    <div className="input-select">
      <label for={id}>Country*</label>
      <select>
        <option>Select Country</option>
        <option>b</option>
      </select>
    </div>
  );
};

export default InputSelect;
// const InputFeild = ({ fullWidth = false, type, text, id, important }) => {
//   return (
//     <div style={fullWidth ? { width: "100%" } : {}} className="input-feild">
//       <label for={id}>
//         {text}
//         {important ? "*" : ""}
//       </label>
//       <input type={type} placeholder={`Enter Your ${text}`} />
//     </div>
//   );
// };

// export default InputFeild;
