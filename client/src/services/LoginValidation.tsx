import React, { useState } from "react";
import Login from "../pages/Login";
import { LoginUser } from "../App";

interface LoginValidationState {
  formName: string;
  formLastName: string;
  formEmail: string;
  formPassword: string;
  formMonth: number;
  formDay: number;
  formYear: number;
}

const LoginValidation: React.FC = () => {
  const [FormData, setFormData] = useState<LoginValidationState>({
    formName: '',
    formLastName: '',
    formEmail: '',
    formPassword: '',
    formMonth: 0,
    formDay: 0,
    formYear: 0,
  })

  const handleChange = (Form: keyof LoginValidationState, value: string | null) => {
    setFormData({ ...FormData, [Form]: value })
  }

  const handleSubmit = () => {
    console.log('Dados do formulário:', FormData);

    LoginUser(FormData);
  }

  return (
    <Login
      FormData={FormData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
};

export default LoginValidation;