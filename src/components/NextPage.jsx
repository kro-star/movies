function NextPage (props) {
    return <div className="row pb-4">
        <div className="col-3 d-none d-md-flex"></div>
        <div className="col-6">
            <button onClick={props.search} className="btn btn-outline-secondary w-100" > Next Page </button>
        </div>
        <div className="col-3 d-none d-md-flex"></div>
    </div>
}
export {NextPage}