import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
  
  return (
    <div className={style.container}>
      
      <input type={'text'} 
      placeholder={'Ciudad...'}
      className={style.barra}>
      </input>
      

      
      <button className = {style.button}
      onClick={() => props.onSearch('Buscando Ciudad')}>
        Agregar
      </button>
      
    </div>
  )
};