import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';


export default function App() {

  const [cities, setCities] = useState([])

  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
    .then((r) => r.json())
    .then((city) =>  {
      if(city.main) {
        const ciudad = {
          min: Math.round(city.main.temp_min),
          max: Math.round(city.main.temp_max),
          img: city.weather[0].icon,
          id: city.id,
          temp: city.main.temp,
          name: city.name,
        };
        setCities(oldCities => [...oldCities, ciudad]);
      }
      else {
        alert('Ciudad no encontrada')
      }
    })
  }
  function onClose (id) {
    setCities(oldCities => oldCities.filter(c => c.id != id))
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities}  onClose={onClose}/>
    </div>
  );
}
