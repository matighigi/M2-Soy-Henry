import { 
    GET_MOVIE,
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    MOVIE_DETAIL
} from "../actions/action-types"

const initialState = {
    movies: [],
    moviesFavorites: [],
    movieDetail: {}
}


export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movies: action.payload.Search //el .Search es por que el Search es una propiedad del obj de la api
            }
        case MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: [...state.moviesFavorites, action.payload]
            }    
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(
                    (movie) => movie.id !== action.payload//que filtre todas aquellas que el id sea distinto al id que llega por payload
                ) 
            }
        
        default:
            return {...state}    
    }
}

