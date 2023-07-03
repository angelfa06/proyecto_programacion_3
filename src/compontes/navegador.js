import react from 'react';
import '../hoja de estilos/navegador.css';

function Navegador(){
    return(
        <div className='nav'>
         <nav>
           <ul class="menu">
             <li><a href="index.html">INICIO</a></li>
             <li><a href="#posibl">POSIBILIDADES</a></li>
             <li><a href="#RED">REDES SOCIALES</a></li>
             <li class="redes1"><a href="#form">SUSCRIBETE</a></li>
            </ul>
         </nav>
        </div>
    )
}

export default Navegador;