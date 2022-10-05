import React from 'react';
import style from './Card.module.css'

export default function Card(props) {
 
  return (<div className={style.div}>
            <button onClick={props.onClose} className={style.boton}>X</button>
            <div>
              <h4 className={style.titulo}>{props.name}</h4>
              <div className={style.info}>
                <div>
                  <p className={style.maxmin}>Min</p>
                  <p className={style.min}>{props.min}</p>
                </div>
                <div>
                  <p className={style.maxmin}>Max</p>
                  <p className={style.max}>{props.max}</p>
                </div>
              </div>
            </div>
            <img className={style.img} 
            src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`} 
            /> 
          {/* prestar atencion a ${props.img} que con destructuring sería ${img} */}
          </div>
  )
};