const FiltersBlock = (props:any)=>{
    return(
        <>
          <div id='filtersBlock'>
                <div className='filterBlock'>
                    <p>Categories</p>
                    <select value={props.category} onChange={(e)=>props.setCategory(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Art'>Art</option>
                        <option value='Biography'>Biography</option>
                        <option value='Computers'>Computers</option>
                        <option value='History'>History</option>
                        <option value='Medical'>Medical</option>
                        <option value='Poetry'>Poetry</option>
                    </select>
                </div>
                <div className='filterBlock'>
                    <p>Sorting by</p>
                    <select value={props.sortBy} onChange={(e)=>props.setSortBy(e.target.value)}>
                        <option value='Relevance'>relevance</option>
                        <option value='Newest'>newest</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default FiltersBlock;