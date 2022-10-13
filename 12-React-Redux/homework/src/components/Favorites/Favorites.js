import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from '../../actions/index'

export class ConnectedList extends Component {

  constructor(props) {
    super(props)
  }

  handleClick(id){
    this.props.removeMovieFavorite(id)
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
            this.props.moviesFavorites.map( movie => {
              return(
                <li>
                  <Link to={`/movie/${movie.id}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button onClick={() => this.handleClick(movie.id)} >x</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    moviesFavorites: state.moviesFavorites 
  }
}

function mapDispatchToProps(dispatch) {
  return{
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)




