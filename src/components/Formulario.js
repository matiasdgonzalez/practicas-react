import React, {useState} from 'react';
import '../stylesheets/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
  setInput(e.target.value);
  };

  const manejarEnvio = e =>{
    e.preventDefault(); //No se va a cargar toda la aplicación cuando enviemos el formulario

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva); //Es lo que va a ocurrir cuando el formulario se intente enviar.
  };


  return (
    <form className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea.'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}

export default Formulario;