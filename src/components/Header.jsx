import React from 'react';
import Rick from '../images/RickSanchez.webp';


function Header() {
  return (
    <>
        <h1 className='TitleHeader'>Rick Sanchez</h1>
        <img src={Rick} alt="background" className="Rick"/>
        <section className='Text'>
        <h2 className='WhoIs'>¿Quien es Rick Sanchez?</h2>
        <p className='Paragraph'>Rick Sanchez es un personaje de la serie de televisión "Rick and Morty" creado por Dan Harmon y Justin Roiland.</p>
        <h3 className='Curious'>Datos Curiosos</h3>
        <ul className='List'>
            <li className='ListItems'>
                <p>Su inteligencia supera cualquier escala humana</p>
            </li>
            <li className='ListItems'>
                <p>Su pistola de portales fue inventada por él mismo</p>
            </li>
            <li className='ListItems'>
                <p>Ha matado y reemplazado versiones de sí mismo y su familia</p>
            </li>
            <li className='ListItems'>
                <p>Es buscado por la Federación Galáctica y el Consejo de Ricks</p>
            </li>

        </ul>
        <h3 className='DiscoverMore'>Descubre más</h3>
        <ul className='List'>
            <li className='ListItems'>
                <p>Conoce más de <a href="https://es.wikipedia.org/wiki/Rick_Sánchez_(personaje)">Rick Sanchez</a></p>
            </li>
            <li className='ListItems'>
                <p>Ver la <a href='https://play.max.com'>serie</a></p>
            </li>
        </ul>
        </section>
        <p className='MadeBy'><strong>Made by</strong> Samuel Urrego</p>
    </>
  )
}

export default Header