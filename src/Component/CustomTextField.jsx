import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ label, name, type = "text", value, onChange, error, helperText }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      margin="normal"
    />
  );
};

export default CustomTextField;
