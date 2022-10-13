import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
//completar con codigo hasta linea
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.getMovieDetail(this.props.match.params.id)
    }
//-----------------------------------
    render() {
        console.log(this.props.movies)
        return (
            <div className="movie-detail">
              {/* //completar aqui abajo con codigo */}
                <h1>{this.props.movieDetail.Title}</h1>
                <p>{this.props.movieDetail.Year}</p>
                <img src={this.props.movieDetail.Poster} alt='poster'/>
                <p>{this.props.movieDetail.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movieDetail: state.movieDetail,
    };
  }
function mapDispatchToProps(dispatch) {
  return{
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);