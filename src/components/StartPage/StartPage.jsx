
import {} from './startPage.css'
import {Search} from '../Search'

function StartPage(props){
    
    return  <div className="container pt-5">
    <div className="row align-content-center hpage-100">
                <div className="col-12  h-100">
                    <p className="fs64 font-Bodoni text-white text-center lh-1 ls-5">FIND </p>
                    <p className="fs-1 font-Bodoni text-white-50 text-center">your favorite</p>
                    <p className="fs64 font-Bodoni text-white text-center lh-1 ls-5">MOVIES</p>
                    <Search  search={props.search} 
                    start = {props.start} 
                    editTypeSearch = {props.editTypeSearch}
                    handleChangeInput={props.handleChangeInput} 
                    page={props.page} 
                    totalPage={props.totalPage} 
                    searchText={props.searchText}
                    typeSearch={props.typeSearch}
                    emptySearch={props.emptySearch}/>
                </div>
            </div>
        </div>
    
}
export {StartPage}