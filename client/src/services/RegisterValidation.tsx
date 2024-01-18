//Pegar dados da pagína register
//Converter e valida-los
//ativar a envio para o banco de dados
import React, { useState } from "react";
import Register from "../pages/Register";
import { RegisterUser } from "../App";

interface RegisterValidationState {
  formName: string;
  formLastName: string;
  formEmail: string;
  formPassword: string;
  formMonth: number;
  formDay: number;
  formYear: number;
}

const RegisterValidation: React.FC = () => {
  const [FormData, setFormData] = useState<RegisterValidationState>({
    formName: '',
    formLastName: '',
    formEmail: '',
    formPassword: '',
    formMonth: 0,
    formDay: 0,
    formYear: 0,
  })

  const handleChange = (Form: keyof RegisterValidationState, value: string | null) => {
    setFormData({ ...FormData, [Form]: value })
  }

  const handleSubmit = () => {
    console.log('Dados do formulário:', FormData);

    RegisterUser(FormData);
  }

  return (
    <Register
      FormData={FormData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
};

export default RegisterValidation;