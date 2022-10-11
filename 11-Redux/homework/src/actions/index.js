export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
// export const IMPAR = 'IMPAR'
// export const ASYNC = 'ASYNC'

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => ({
  // Completa la funcion
  type: INCREMENT
});

export const decrement = () => ({
  // Completa la funcion
  type: DECREMENT
});

// export const impar = () => ({
//   type: IMPAR
// })

// export const async = () => ({
//   type: ASYNC
// })