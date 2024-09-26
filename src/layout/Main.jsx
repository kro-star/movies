
import React, {Component} from "react"
import {SearchPage} from '../components/SearchPage'
import {StartPage} from '../components/StartPage/StartPage'
import {MovieClick} from '../components/MovieClick/MovieClick'

const API_KEY = process.env.REACT_APP_API_KEY;
class  Main extends Component {
    
    state = {
        movies: [],
        finding: false,
        start: true,
        filter: false,
        page: 1,
        totalPage: 1,
        searchText: '',
        typeSearch: 'all',
        error: false,
        movieClick: {},
        movieClickResponse: false,
    }

    handleChangeInput = (e) => {
        
        (e.target.value === '') ? this.setState({searchText: e.target.value, finding: false}): this.setState({searchText: e.target.value, page: 1})
    }

    handleClickMovie = (e) =>{
        console.log(e.target.dataset.id)
        this.searchByID(e);
        console.log(this.state.movieClick)
    }

    emptySearch = () => {
        this.setState({movies: [],
            page: 1,
            totalPage: 0,
            error: '',
        })
    }

    clearAll = () => {
        this.setState({
            movies: [],
            finding: false,
            start: true,
            filter: false,
            page: 1,
            totalPage: 1,
            searchText: '',
            typeSearch: 'all',
            error: false,
            movieClick: {},
            movieClickResponse: false,
        })
    }

    removeMovieClick = () => {
        this.setState({            
            movieClick: {},
            movieClickResponse: false,
        })
    }

    editTypeSearch = (typeS) => {
        this.setState({
            typeSearch: typeS
        })
    }

    editFilter = () => {
        const f = !this.state.filter;
        this.setState({
            filter: f,
        })
    }

    searchByID =  (e) => {
        
        
            const query = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${e.target.dataset.id}`;

                fetch(query)
                
                .then((response) => response.json())
                .then( (data) => {
                    //debugger;
                    if(data.Response === 'True') {
                         this.setState({
                        movieClick: {
                            title: data.Title,
                            country: data.Country,
                            year: data.Year,
                            genre: data.Genre,
                            actors: data.Actors,
                            plot: data.Plot,
                            poster: data.Poster,
                            rating: data.ImdbRating,
                        },
                        movieClickResponse: true,                    
                    })
                } else{
                        this.setState({
                            movieClickResponse: false,
                        movieClick: {}
                    })
                }
                })
            
                .catch((error) => {
                this.setState({error: true})
                console.error(error)
                });
        //} else {

        
      }


                  
    search =  () => {
        if (this.state.totalPage >= this.state.page || this.state.finding === false){
            this.setState({finding: true})
            const query = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchText}${(this.state.typeSearch !== 'all' ? `&type=${this.state.typeSearch}` : ``)}${this.state.page === 1 ? `` : `&page=${this.state.page}`}`;

                fetch(query)
                
                .then((response) => response.json())
                .then( (data) => {

                    data.Response === 'True' ? this.setState({
                        movies:  [...this.state.movies, ...data.Search],
                        start: false,
                        error: false,
                        page: this.state.page + 1,
                        totalPage: (data.totalResults % 10 === 0) ? data.totalResults/10 : ((data.totalResults / 10) >> 0 ) + 1 })
                    :
                        this.setState({
                            movies:  [],
                            start: false,
                            error: true,
                            page: 1,
                            totalPage: 0 })
                })
            
                .catch((error) => {
                this.setState({error: true})
                console.error(error)
                });
        //} else {

        }
      }

   
    render(){
        return  <div className="bg-black" >
            <main className="  white-text  position-relative">
            {
            (this.state.finding || this.state.movies.length > 0 || this.state.error) ? 
                this.state.movieClickResponse ? <MovieClick  movieClick={this.state.movieClick} removeMovieClick={this.removeMovieClick}/> 
                :
                <SearchPage search={this.search} 
                editTypeSearch={this.editTypeSearch}
                movies={this.state.movies} 
                filter={this.state.filter} 
                editFilter={this.editFilter}
                start={this.state.start} finding={this.state.finding} page={this.state.page} totalPage={this.state.totalPage} handleChangeInput={this.handleChangeInput} 
                searchText={this.state.searchText}
                typeSearch={this.state.typeSearch} emptySearch={this.emptySearch}  error={this.state.error} handleClickMovie = {this.handleClickMovie}/>
            :
                <StartPage search={this.search} 
                editTypeSearch = {this.editTypeSearch}
                filter={this.state.filter} 
                editFilter={this.editFilter}
                movies={this.state.movies} finding={this.state.finding} start={this.state.start} handleChangeInput={this.handleChangeInput} searchText={this.state.searchText}
                typeSearch={this.state.typeSearch} emptySearch={this.emptySearch} error={this.state.error}/>
            
        }    
                
            </main>
        </div>
    }
}
export { Main }