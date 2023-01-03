
const Pagination = ({page, onClickPrevious, onClickNext}) => {
    return (
        <div>
            <button onClick={onClickPrevious}>Previous</button>
                <span> {page} </span>
            <button onClick={onClickNext}>Next</button>
     </div>
    )
}

export default Pagination;