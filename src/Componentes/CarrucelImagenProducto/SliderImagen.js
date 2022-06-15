import React from 'react';

export default function SliderImagen({urlImagen}) {
    return (
        <div className='sliderImagen'>
            <img  className='imagenPrductoCarrusel' src={urlImagen} alt="img"/>
        </div>
    );
}