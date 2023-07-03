import react from 'react';
import '../hoja de estilos/header.css';

function Header(){
    return(
        <div className='Portada' id='port'>
            <img 
             className='img1'
             src={require('../imagenes/globo2.png')}
             alt="Logo de la empresa"
             />
             <h1 className='titulo'>Encuentra tu idioma</h1>
        </div>
    )
}

export default Header;