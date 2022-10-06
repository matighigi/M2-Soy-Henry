import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
  
<nav class="navbar navbar-light bg-light" >
  <a class="navbar-brand" >
  <img src={Logo}/>
  Henry - Wheather App
  </a>
  <SearchBar onSearch={onSearch}/>
</nav>


  );
};

export default Nav;
