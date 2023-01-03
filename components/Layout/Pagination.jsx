
const Pagination = ({page, onClickPrevious, onClickNext}) => {
    return (
        <div className="flex justify-center items-center my-8">
            {page > 1 && <button className="text-xl mx-8 hover:scale-105 ease-in-out duration-300" onClick={onClickPrevious}>Previous</button>}
                <span className="rounded-2xl bg-blue-900 text-white text-xl w-10 text-center"> {page} </span>
            {page < 100 && <button className="text-xl mx-8 hover:scale-105 ease-in-out duration-300" onClick={onClickNext}>Next</button>}
        </div>
    )
}

export default Pagination;