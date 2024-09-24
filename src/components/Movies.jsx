import { Movie } from "./Movie"

export function Movies(props) {  
    const { movies } = props;

        return (
            <div className="movies row row-cols-1 row-cols-md-5 g-3 pt-3 pb-3 movies-container justify-content-center">
            {(movies.length > 0) ? movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie} handleClickMovie = {props.handleClickMovie}/>
            )) : <p className="text-white text-center fs-4"> Movie not found!</p>
        }
        </div>
        )
        
        
        /*
        <div key={new Date().getUTCDate().toString}  className="row row-cols-1 row-cols-md-5 g-3 mt-3 mb-3 movies-container"  > 
                    {props.movies.map(movie => {
                        return    <Movie key={movie.imdbID} {...movie} /> 
                        
                    }
                    
                )}
    </div>*/
        
    
}

