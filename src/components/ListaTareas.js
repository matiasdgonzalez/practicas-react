import React, { useState } from 'react';
import Formulario from './Formulario.js';
import Tarea from './Tarea.js';
import '../stylesheets/ListaTareas.css';

function ListaTareas() {


  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){ //chequea que no sea cadena vacia
      tarea.texto = tarea.texto.trim(); //elimina espacios delante y detras de la cadena
      const tareasActualizadas = [tarea, ...tareas]; //envía la nueva tarea a un arreglo y la posiciona por delante de las que ya fueron agregadas
      setTareas(tareasActualizadas); //setea la tarea nueva y actualiza la lista.
    } 
  };

  //Elimina la tarea según su id. 

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id); 
    setTareas(tareasActualizadas);
  }

  //Genera un mapeo del props tarea y chequea su estado, para saber si fue completada o no.
  
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
    <Formulario onSubmit={agregarTarea}/> 
    <div className='tareas-lista-contenedor'>
      {
        tareas.map((tarea) => 
        <Tarea 
          key={tarea.id} //ayuda a mantener el orden de la lista al ser actualizada. no se pasa como un prop, así que no podemos acceder a key en el componente.
          id={tarea.id} //necesitamos pasar doble el id para no tener problemas.
          texto = {tarea.texto}
          completada = {tarea.completada}
          completarTarea = {completarTarea}
          eliminarTarea = {eliminarTarea}
        />
        )
      }
    </div>
    </>
  );
}

export default ListaTareas;
