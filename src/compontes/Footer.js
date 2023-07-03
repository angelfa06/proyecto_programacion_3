import react from 'react';
import '../hoja de estilos/Footer.css';

function Pie(){
    return(
        <div className='globodepie'>

            <p className='fin'>Grasias por ver</p>
            <img 
             className='globodepiepagina1'
             src={require('../imagenes/globo2.png')}
             alt="globo con banderas 2"
             />
        </div>
    )
}

export default Pie;