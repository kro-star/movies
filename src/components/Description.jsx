function Description(props) {
    return <> 
    <div className="bg-white pt-5 pb-3 text-center fs-60 font-Lora">
        {props.movieClick.title}
        </div>
    <div className="bg-white  pt-3 pb-3 ps-20 pe-20 h-100">
        <div className="fs-5 pb-3"> {props.movieClick.year}, {props.movieClick.country}</div>
        <div className="fs-5 pb-3"> {props.movieClick.genre}</div>
        <div className="fs-4 pb-2 fw-bold">Actors</div>
        <div className="pb-5 fs-4"> {props.movieClick.actors}</div>
    </div>
</>
}
export {Description}