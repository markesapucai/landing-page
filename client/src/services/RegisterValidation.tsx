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
  formDay: number;
  formMonth: number;
  formYear: number;
}

const RegisterValidation: React.FC = () => {
  const [FormData, setFormData] = useState<RegisterValidationState>({
    formName: '',
    formLastName: '',
    formEmail: '',
    formPassword: '',
    formDay: 0,
    formMonth: 0,
    formYear: 0,
  })

  const handleChange = (Form: keyof RegisterValidationState, value: string | null) => {
    setFormData({ ...FormData, [Form]: value })
  }

  const Example = () => {
    const { formName, formLastName, formEmail, formPassword, formDay, formMonth, formYear } = FormData;
    const formBirthday = `${formYear}-${formMonth}-${formDay}`;
    const newFormData = {
        formName,
        formLastName,
        formEmail,
        formPassword,
        formBirthday
    };

    return newFormData;
  }

  const handleSubmit = () => {
    console.log('Dados do formulário:', FormData);
    const NewObj = Example();
    RegisterUser(NewObj);
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