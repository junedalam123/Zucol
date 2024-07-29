import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../Component/CustomTextField";
import { login } from "../Redux/AuthSlice";
import useForm from "../CustomHooks/useForm";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, handleInputChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Enter a valid email";
    } else {
      tempErrors.email = "";
    }

    if (!formValues.password) {
      tempErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      tempErrors.password = "Password should be of minimum 6 characters length";
    } else {
      tempErrors.password = "";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleLogin = async () => {
    if (validate()) {
      try {
        await dispatch(login({ email: formValues.email, password: formValues.password }));
        resetForm();
        navigate("/documents");
      } catch (error) {
        alert("Login failed:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "75%", md: "50%", lg: "40%" },
          boxShadow: 3,
          p: { xs: 2, md: 4 },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            Login
          </Typography>

          <CustomTextField
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <CustomTextField
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
