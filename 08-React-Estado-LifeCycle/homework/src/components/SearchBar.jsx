import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  const [cities, setCities] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(cities);
      setCities('')
    }}>

      <input
        id= 'buscador'
        type="text"
        placeholder="Ciudad..."
        value = {cities}
        onChange = {(e) => setCities(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
