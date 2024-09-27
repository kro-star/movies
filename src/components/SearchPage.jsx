
import {Preloader} from "./Preloader/Preloader"
import {Search} from "./Search"
import {Movies} from "./Movies"
import {NextPage} from './NextPage'
import top from '../img/top.png'

function SearchPage(props){
    
    return <div className="container pt-4">

        <Search search={props.search} 
                filter={props.filter} 
                editFilter={props.editFilter}
        editTypeSearch={props.editTypeSearch}
        movies={props.movies} finding={props.finding}  start={props.start} handleChangeInput={props.handleChangeInput} page={props.page} totalPage={props.totalPage} searchText={props.searchText}
            typeSearch={props.typeSearch} emptySearch={props.emptySearch} loading={props.loading}/>
        
            
            { props.movies.length > 0 || props.error ? (
                
                <>
                <Movies id="top" key = {Date().getUTCDate} movies={props.movies} error={props.error} handleClickMovie = {props.handleClickMovie}/>
                { 
                props.movies.length > 0 ? <a href="#top" className=" position-absolute position-top" ><img src={require('../img/top.png')} alt="" className="arrowTop"/> </a>
                : ''}
                </>
            ) : <Preloader /> }
        {
        (props.totalPage >= props.page && props.finding) ?  <NextPage search={props.search}/>  : ''
        }
        { 
            
        }
    </div>
}

export {SearchPage}