import React from 'react';

const Item = props => (
    <li id={props.pelicula.id}>
        <img src={props.pelicula.urlImagen} alt={props.pelicula.nombre} />
        <h2>{props.pelicula.nombre}</h2>
        <p>{props.pelicula.sinopsis}</p>
    </li>
)

export default Item;