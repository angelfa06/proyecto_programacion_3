import logo from './logo.svg';
import './App.css';
import Header from './compontes/header.js'
import Navegador from './compontes/navegador.js';
import Texto1 from './compontes/componente1.js';
import Banderas from './compontes/Banderas';
import Texto2 from './compontes/componente2';
import Pie from './compontes/Footer';
import Suscripcion from './compontes/Suscripcion';
import Redes from './compontes/Redes';

import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './compontes/ListaDeTareas';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navegador/>
      <Texto1/>
      <Banderas/>
      <Texto2/>
      <Redes/>

 
      <div className='tareas-lista-principal'>
           <h1>Organiza tus tareas</h1>
           <ListaDeTareas />
        </div>

      <Suscripcion/>


      <Pie/>
      
 
    </div>
  );
}


export default App;
