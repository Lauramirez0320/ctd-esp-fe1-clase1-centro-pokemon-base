import React, { useState, useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const { inputForm, handleInputBlur } = useContext(FormContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [inputValue, setInputValue] = useState(inputForm[name] || "");

  const handleInputOnChange = (event) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInputValue(event.target.value);
  };

  const onBlur = (event) => {
    event.preventDefault();
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    handleInputBlur({
      campo: name,
      valor: inputValue,
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        autocomplete="off"
        type={type}
        value={inputValue}
        id={name}
        onChange={handleInputOnChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
