function Plot(props) {
    return <div className="bg-dark-gray text-white ps-3 h-100">
    <div className="fs-3 pb-3 pt-3 text-start ">Plot</div>
    <div className="fs-6">
        { props.movieClick.plot}
    </div>
</div>
}
export { Plot }