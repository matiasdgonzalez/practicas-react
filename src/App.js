import './App.css';
import freeCodeCampLogo from './images/logoFreeCodeCamp.png';
import ListaTareas from './components/ListaTareas.js';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
      <img src={freeCodeCampLogo} className='freecodecamp-logo'
      alt='Logo de freeCodeCamp' />
    </div>
    <div className='tareas-lista-princ'>
      <h1>Mis tareas</h1>
      <ListaTareas />
    </div>
    </div>
  );
}

export default App;
