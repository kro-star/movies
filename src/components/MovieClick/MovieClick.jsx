import {} from './movieClick.css'
import {} from '../../img/top.png'
import {} from '../../img/star.png'
import {Breadcrumb } from '../Breadcrumb'
import {Plot} from '../Plot'
import {Description} from '../Description'

function MovieClick(props) {

    const bgImage = {backgroundImage: `url(${props.movieClick.poster})`}
    const plug = require('../../img/plug.jpg');
    const bgPlug = {backgroundImage: `url(${plug})`}
    console.log(props.movieClick.poster);
    console.log(bgImage);
    return <>
        <Breadcrumb removeMovieClick = {props.removeMovieClick} movieClick={props.movieClick}/>
    
        <div className="row h-screen m-0">
            <div className="col-4 position-relative ps-0 pe-0 h-screen">
                { props.movieClick.poster === "N/A" ? <div className=" bg-poster h-100" style={bgPlug}></div> :
                <div className=" bg-poster h-100" style={bgImage}></div> 
}
                <div className="d-flex position-absolute star">
                    <img src="../../img/star.png" alt="" className=" d-block"  /> 
                    <div className=" ms-2 fs-6 lh-sm text-red">{props.movieClick.rating}</div>
                </div>
               
            </div>
            <div className="col-8 h-screen  ps-0  pe-0 d-flex flex-column">
                    <Description movieClick = {props.movieClick} />

                {props.movieClick.plot !== 'N/A' ? 
                    <Plot movieClick ={props.movieClick} />
                    :
                    ''
                }
            </div>
        </div>
              
    </>
}

export { MovieClick }