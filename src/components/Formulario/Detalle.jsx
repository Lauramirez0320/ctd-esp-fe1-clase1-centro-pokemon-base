import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = (props) => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { inputForm } = useContext(FormContext);
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {inputForm.nombre} </p>
          <p>Apellido:{inputForm.apellido} </p>
          <p>Email:{inputForm.email} </p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {inputForm.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
