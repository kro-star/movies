import React, {Component} from "react";
import {Filter} from './Filter'
import filter from '../img/filter.png'


class  Search extends Component{
    constructor(props){
        super(props);
        this.state = {
           // searchText: '',
           // typeSearch: 'all',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.emptySearch();
        this.props.search();
    }
    handleSearch = (e) => {
        if (e.key === 'Enter') {
                this.handleSubmit(e);
        }
    }

    handleRadio = (e) =>{
        this.props.editTypeSearch( e.target.dataset.type)

    }
   
    

    render(){
        const { search, finding, searchText, start, filter } = this.props;

        return  <div className="row">
             
        <form action="">
            <div className="row">
                <div className="col-lg-2 d-md-flex d-none"></div>
                <div className="col-lg-8 col-md-12">
                    <div className={start === true ? "input-group mb-3" : "input-group mb-3 "}>
                        <input
                            placeholder="Search" 
                            id="search" 
                            type="search" 
                            className="validate bg-dark-gray text-white border-end-0  " 
                            value = {searchText}
                            onChange={this.props.handleChangeInput}
                            onKeyDown={ this.handleSearch}
                            aria-label="Recipient's username" 
                            aria-describedby="button-addon2" />
                            
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            id="button-addon2"
                            onClick={this.handleSubmit}
                            >
                                Go!
                            </button>
                            
                        </div>
                        {start === false ? 
                        
                        <div className="d-flex mb-3">
                            
                            <input  type="radio" name="type" data-type="series" checked={this.props.typeSearch === 'series'} onChange={this.handleRadio} />
                            <label  for="series" className="ms-2 me-4 text-white " >Series</label>
                            <input  type="radio" name="type"  data-type="movie" checked={this.props.typeSearch === 'movie'} onChange={this.handleRadio} />
                            <label  for="movie"  className="ms-2 me-4 text-white">Movies</label>                        
                            <input  type="radio" name="type" data-type="all"  checked={this.props.typeSearch === 'all'} onChange={this.handleRadio} />
                            <label   for="all"  className="ms-2  text-white">All</label>
                        </div>
                        : ''
                    }

                     
                </div>
                <div className="col-lg-2 d-md-flex d-none">
                    
                </div>
            </div>
            
            
            </form> 
        </div>

    }

}
export {Search}
