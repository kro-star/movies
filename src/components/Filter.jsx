function Filter(props){
    const {typeSearch, handleRadio} = this.props
    return <>
         <p>
        <label>
            <input name="group1" 
            type="radio" 
            value="all" 
            checked={typeSearch === 'all'} 
            onChange={handleRadio} />
            <span>All</span>
        </label>
    </p>
    <p>
        <label>
            <input name="group1" 
            type="radio"  
            value="series" 
            checked={typeSearch === 'series'} 
            onChange={handleRadio} />
            <span>Series</span>
        </label>
    </p>
    <p>
        <label>
            <input name="group1" 
            type="radio"   
            value="movie" 
            checked={typeSearch === 'movie'}  
            onChange={handleRadio}/>
            <span>Film</span>
        </label>
</p>
</>
}

export {Filter}