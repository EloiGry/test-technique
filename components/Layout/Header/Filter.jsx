const Filter = ({selectOption, onValueChange}) => {
    return (
        <div className='flex justify-around items-center pt-20 pb-4 border-b-2 border-gray-300'>  
            <div>
                <input type="radio" id='' name="type" value='' checked={selectOption === ''} onChange={onValueChange}/>
                <label className='p-1' htmlFor="all">All</label>
            </div>

            <div>
                <input type="radio" id="movie" name="type" value="movie" checked={selectOption === 'movie'} onChange={onValueChange}/>
                <label className='p-1' htmlFor="movie">Movies</label>
            </div>

            <div>
                <input type="radio" id="series" name="type" value="series" checked={selectOption === 'series'} onChange={onValueChange}/>
                <label className='p-1' htmlFor="series">Series </label>
            </div>

            <div>
                <input type="radio" id="episode" name="type" value="episode" checked={selectOption === 'episode'} onChange={onValueChange}/>
                <label className='p-1' htmlFor="episode">Episodes</label> 
            </div>
        </div>
    );
};

export default Filter;