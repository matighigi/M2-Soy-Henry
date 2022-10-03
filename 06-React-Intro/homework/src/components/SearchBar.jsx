import React from 'react';
import Card from './Card';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type={'text'} placeholder={'Ciudad...'}></input>
      <button onClick={() => props.onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
  )
};

//RESUELTO CON COMPONENTE DE CLASE

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <div>
//       <input type={'text'} placeholder={'Ciudad...'}></input>
//       <button onClick={() => props.onSearch('Buscando Ciudad')}>Agregar</button>
//     </div>
//     )
//   }
// }

// export default SearchBar