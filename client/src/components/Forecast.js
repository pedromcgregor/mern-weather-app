import DateCard from './DateCard';

const Forecast = (props) => {
    return(
        <section className='cards'>
        {props.cities.map((cities, index) => (
            <div onClick={()=>props.handleForecastClick(cities)}>
            <DateCard key={index} cities={cities}/>
            </div>
        ))}
        </section>                
        
    )
};
export default Forecast;