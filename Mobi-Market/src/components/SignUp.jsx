import { FormControl, Input, InputLabel } from "@mui/material";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';import "../styles/SignUp.css";
import { useFormik } from 'formik';


export default function SignUp() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  })
    return (
        <div className="right-container">
          <div className="signup__header">
            <div className="back-button">
              <div className="icon">
                <KeyboardBackspaceRoundedIcon className="back-icon"/>
              </div>
              <div className="text">
                  Назад 
              </div>
            </div>
            <div className="signup-text">
              Регистрация
            </div>
          </div>
          <form className="signup__container-form ">
            <div className="container-content">
              <FormControl variant="standard" className="form-container">
                <InputLabel htmlFor="standard-adornment">
                  Имя пользователя
                </InputLabel>
                <Input />
              </FormControl>
              <FormControl variant="standard"  className="form-container">
                <InputLabel htmlFor="standard-adornment">
                  Почта
                </InputLabel>
                <Input/>
              </FormControl>
              <button className="submit-button">
                Далее 
              </button>
            </div>
          </form>
        </div>
        
    )
}