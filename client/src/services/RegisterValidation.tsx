//Pegar dados da pagína register
//Converter e valida-los
//ativar a envio para o banco de dados
import React, { useState } from "react";
import Register from "../pages/Register";
import { RegisterUser } from "../App";

interface RegisterValidationState {
  formGridName: string;
  formGridLastName: string;
  formGridEmail: string;
  formGridPassword: string;
  formGridMonth: number;
  formGridDay: number;
  formGridYear: number;
}

const RegisterValidation: React.FC = () => {
  const [FormData, setFormData] = useState<RegisterValidationState>({
    formGridName: '',
    formGridLastName: '',
    formGridEmail: '',
    formGridPassword: '',
    formGridMonth: 0,
    formGridDay: 0,
    formGridYear: 0,
  })

  const handleChange = (FormGrid: keyof RegisterValidationState, value: string | null) => {
    setFormData({ ...FormData, [FormGrid]: value })
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