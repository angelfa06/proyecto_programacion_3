import react from 'react';
import '../hoja de estilos/Suscripcion.css';

function Suscripcion(){
    return(
        <div className='Formulario'id='form'>
            <div className='contenedor1'>
             <h3>Aprende un idioma y llega mas lejos que nunca encontrando nuevas posibilidades</h3>
            </div>
            <div className='contenedor2'>
                <form action="https://formsubmit.co/lucaslescano.t89@gmail.com" method="POST">
                 <h4> Envianos un Comentario</h4>
                 <input className='controls' type='text' name='nombres' id='nombres' placeholder='Ingrese su nombre'/>
                 <input className='controls' type='text' name='apellidos' id='apellidos' placeholder='ingrese su apellido'/>
                 <input className='controls' type='email' name='correo' id='correo' placeholder='ingrese su correo'/>
                 <textarea  className='controls' name='coments'id='coments' cols={38} rows={5}  ></textarea>
                 <input className='controls' type='submit' value='enviar'/>
                </form>

            </div>

        </div>
    )
}

export default Suscripcion;