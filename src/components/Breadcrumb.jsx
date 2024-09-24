function Breadcrumb (props) {
    return <div className="container pt-3">
    <div className="row">
        <div className="col-12">
            <nav className="bc-tag text-white ps-4" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <span className=' cursor-pointer' onClick={props.removeMovieClick}>Search</span>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">{props.movieClick.title}</li>
                </ol>
            </nav>
        </div>
    </div>       
</div>
}

export {Breadcrumb}