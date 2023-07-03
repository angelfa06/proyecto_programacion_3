import react from 'react';
import '../hoja de estilos/Banderas.css';

function Banderas(){
    return(
        <div className='Banderas del mundo'>
            <img 
             className='Banderas1'
             src={require('../imagenes/1.jpeg')}
             alt="multiples banderas"
             />
        </div>
    )
}

export default Banderas;