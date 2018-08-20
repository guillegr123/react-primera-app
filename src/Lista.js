import React from 'react';
import Item from './Item';

const Lista = props => (
  <ul>
    {
      props.listaPeliculas.map(item => <Item pelicula={item}/>)
    }
  </ul>
);

export default Lista;