import "../styles/Login.css";
import { TextField, FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import { useState } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container-logo">
          {/* <img src="src/assets/Frame 851212072.png" alt="Logo" /> */}
        </div>
        <div className="login__container-form">
            <FormControl variant="standard">
              <TextField
                id="standard-basic"
                label="Имя пользователя"
                variant="standard"
                className="login__form-input"
              />
            </FormControl>
            <FormControl >
            <InputLabel htmlFor="standard-adornment-password" style={{left: "-15px"}}>
                Пароль
              </InputLabel>
              <Input
                className="login__form-input"
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
        </div>
      </div>
    </div>
  );
}
