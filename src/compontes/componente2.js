import react from 'react';
import '../hoja de estilos/componente2.css';

function Texto2(props) {
    return (
        <div id='posibl'>
            <h2>Aprende un idioma y descubre multiples posibilidades</h2>

            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1' >
                <h4 className='Anuncio'>Trabajo</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/trabajo.jpg')}
                    alt="chica trabajando"
                />
                <p>saber un idioma aumenta considerablemente tu competitividad, ya que demuestras:
                    Proactividad y agilidad en el aprendizaje.
                    Ser un puente de comunicación en proyectos, ideas y decisiones.
                    Tener iniciativa para descubrir nuevas áreas y conocimientos.</p>
            </div>
            </a>

            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>Viajes</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/viajes.jpeg')}
                    alt="chica trabajando"
                />
                <p>Cuando aprendes un nuevo idioma tus vacaciones cambian completamente. 
                    En lugar de alojarte en hoteles o grandes resorts turísticos, 
                    puedes encontrar el valor para mezclarte con la gente local y viajar fuera de los tours y las rutas más turísticas.</p>
            </div>
            </a>



            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>nuevos amigos</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/amigos.jpg')}
                    alt="chica trabajando"
                />
                <p>Al asistir a un curso de idiomas se conoce a un montón de gente nueva con la que incluso podrías terminar forjando una buena amistad. 
                    En los cursos de idiomas en el extranjero se reúnen estudiantes de todo el mundo y a menudo esas amistades se mantienen incluso después de la vuelta a casa</p>
            </div>
            </a>


            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>nuevas culturas</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/Cultura.webp')}
                    alt="chica trabajando"
                />
                <p>El aprendizaje de una lengua extranjera no se centra sólo en la memorización de vocabulario y el saberse correctamente la gramática,
                     sino que también conlleva aprender sobre la cultura del país en el que se utiliza el idioma.
                      .</p>
            </div>
            </a>


            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>Abrir la mente</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/fortaleza.jpg')}
                    alt="chica trabajando"
                />
                <p>saber un idioma aumenta considerablemente tu competitividad, ya que demuestras:
                    Proactividad y agilidad en el aprendizaje.
                    </p>
            </div>
            </a>


            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>Aumenta tu confianza</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/confianza.jpg')}
                    alt="chica trabajando"
                />
                <p>Una vez que hayas decidido aprender un idioma te darás cuenta de lo rápido que aumentará tu confianza.
                Tu progreso te proporcionará la suficiente motivación para continuar aprendiendo.
                Además recibirás la admiración de aprender un idioma
                </p>
            </div>
            </a>


            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>Entrena tu cerebro</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/cerebro.jpg')}
                    alt="chica trabajando"
                />
                <p>Esto puede sonar un poco raro, 
                    pero el aprendizaje de una lengua extranjera ayuda a mantenerse en forma y saludable.
                     Al tratar con el vocabulario y la gramática complicada tus células cerebrales 
                     trabajan de manera que tu cerebro está entrenado y no sólo para aumentar tu memoria.</p>
            </div>
            </a>



            <a href='https://www.youtube.com/watch?v=wRg3NdNh6Q0'>
            <div className='Trabajo1'>
                <h4 className='Anuncio'>inpulsa tu carrera</h4>

                <img
                    className='trabajo'
                    src={require('../imagenes/carrera.webp')}
                    alt="chica trabajando"
                />
                <p>Hoy día es casi inevitable hablar al menos dos idiomas si quieres encontrar un buen trabajo.
                     Los candidatos con amplios conocimientos de idiomas son demandados en todas las empresas.
                     Nuestro mundo se está volviendo cada vez más globalizado</p>
            </div>
            </a>


        </div>

    )
}

export default Texto2;
