import React, { createContext, useState } from "react";

// // Aqui debemos crear nuestro contexto encargado de manejar los datos de los inputs del formulario
export const FormContext = createContext();

// y nuestro provider, encargado de alojar a los componentes que tendrán acceso a este contexto
const FormContextProvider = ({ children }) => {
  // Almacenamos el estado de los inputs:
  const [inputForm, setInputForm] = useState({
    // nombre: "",
    // apellido: "",
    // email: "",
  });
  //Crear los métodos que cambiarán el estado de los inputs
  const handleInputBlur = (valorInput) => {
    const { campo, valor } = valorInput;
    setInputForm({ ...inputForm, [campo]: valor });
  };
  return (
    <FormContext.Provider value={{ inputForm, handleInputBlur }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
