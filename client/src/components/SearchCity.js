import Select from 'react-select';

const SearchCity = ({options,onChange,defaultValue}) => {

return(
    
    <section className='container ' style={{color:'black', width:'400px', paddingBottom:'20px'}}>
        <Select options={options} onChange={onChange} defaultValue={defaultValue} />
    </section>
    
)
}

export default SearchCity;