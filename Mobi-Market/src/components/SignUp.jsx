import "../styles/SignUp.css";
import { TextField, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";


export default function SignUp() {

    return (
        <>
        <div className="signup__header">
            
            <h4>Регистрация</h4>
        </div>
        <div className="login__container-form">
            <FormControl variant="standard" className="login__form-input">
            <TextField
              id="standard-basic"
              label="Имя пользователя"
              variant="standard"
            />
          </FormControl>
          <FormControl variant="standard" className="login__form-input">
            <InputLabel
              htmlFor="standard-adornment-password"
            >
              Пароль
            </InputLabel>
            <Input id="standard-adornment-password"/>
            </FormControl>
            <button className="login__input-button">
            Далее
          </button>
        </div>
        </>
        
    )
}