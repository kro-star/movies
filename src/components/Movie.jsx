

export function Movie (props) {
    const { Title: title, 
        Poster: poster,
        Year: year,
        Type: type,
        imdbID: id, handleClickMovie } = props;
      const plug = require('../img/plug.jpg')
      const typeUp = type.toUpperCase();
      return  <div id={id} role="button" className="col" onClick={handleClickMovie}>
      <div className="card w-100 mb-3 border-0 rounded-0 text-white bg-grad-dark-gray position-relative" >
        {poster==="N/A" ? 
          <><img src={plug} alt={title}  className="card-img-top"  data-id={id}/> 
          <span className='position-absolute text-center bottom-0 right-0 w-100 text-black ps-2 pe-2 pb-2'>{title}</span></>
        : 
          <img src={poster} alt={title}  className="card-img-top"  data-id={id}/>
}
  <div className="card_label fs-14">{typeUp}</div>
    </div>
  </div>
    
}