import { createStore } from "redux"

// creación de la store
const store = createStore(reducer);

//inicializar estado global
const initialState = {
    owner: 'FT-31c',
    counter: 0,
    array: [1, 2, 4, 'chau']
}

//creamos el reducer
function reducer(state = initialState, action){
    switch(action.type){
        case 'AUMENTAR':
            return ({
                ...state,
                counter: state.counter + 10,
                array: [...state.array, 'holi']
            })

        case 'DECREMENTAR':
            return({
                ...state,
                counter: state.counter - 10
            })
        
        default:
            return {...state}
    }
}


// Wallet.jsx
function Wallet(){
    return (
        <div>
            <button 
                onClick={() => dispatch({type:'AUMENTAR'})} 
            >Aumentar 10</button>
            <button
                onClick={() => dispatch({type:'DECREMENTAR'})}
            >Decrementar 10</button>
        </div>
    )
}