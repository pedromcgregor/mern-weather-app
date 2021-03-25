const SearchCity = (props) => {
    return (
        <section className='search'>
        <input 
            className='form-control'
            type='text'
            value={props.value}
            onChange={(e)=> props.setSearchValue(e.target.value)}
            placeholder='City to search...'
            autoFocus
            />
    </section>
    )
};
export default SearchCity;