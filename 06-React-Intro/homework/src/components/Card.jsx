import React from 'react';

export default function Card(props) {
  //preguntar como seria con destructuring
  //props = {max, min, name, img, onClose}
  // acá va tu código
  return (<div>
            <button onClick={props.onClose}>X</button>
            <h4>{props.name}</h4>
            <div>
              <p>Min</p>
              <p>{props.min}</p>
              <p>Max</p>
              <p>{props.max}</p>
            </div>
            <img src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
          </div>
  )
};

//RESUELTO CON COMPONENTE DE CLASE

// class Card extends React.Component{
//   render() {
//     return (
//       <div>
//             <button onClick={props.onClose}>X</button>
//             <h4>{props.name}</h4>
//             <div>
//               <p>Min</p>
//               <p>{props.min}</p>
//               <p>Max</p>
//               <p>{props.max}</p>
//             </div>
//             <img src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
//       </div>
//     )
//   }
// }
// export default Card