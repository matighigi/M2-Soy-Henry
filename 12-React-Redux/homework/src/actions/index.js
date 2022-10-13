import { 
    GET_MOVIE, 
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    MOVIE_DETAIL
} from "./action-types"

var miApiKey = 'ac812828'

export const getMovie = (titulo) => {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${miApiKey}&s=${titulo}`)
        .then (response => response.json())
        .then(obj => dispatch({type: GET_MOVIE, payload: obj}))
    }
}
export const getMovieDetail = (id) => {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${miApiKey}&i=${id}`) //despues del & en este caso va i y no s(lo dice en la pagina oficial)
        .then (response => response.json())
        .then(obj => dispatch({type: MOVIE_DETAIL, payload: obj}))
    }
}
export const addMovieFavorite = (movie) => {
    return {type: ADD_MOVIE_FAVORITE, payload: movie}
}
export const removeMovieFavorite = (id) => {
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
}




