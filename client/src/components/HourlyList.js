import Hourly from './Hourly';

const HourlyList = (props) => {
    return(
        <section className='small-cards' >
        {props.hour.map((hour, index) => (
            <div key={index} onClick={()=>props.handleHourlyClick()}>
            <Hourly  hour={hour}/>
            </div>
            
        ))}
        </section>    
    )
};
export default HourlyList;