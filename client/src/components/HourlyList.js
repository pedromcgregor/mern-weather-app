import Hourly from './Hourly';

const HourlyList = (props) => {
    return(
        <section className='small-cards'>
        {props.hour.map((hour, index) => (
            <div onClick={()=>props.handleHourlyClick()}>
            <Hourly key={index} hour={hour}/>
            </div>
            
        ))}
        </section>    
    )
};
export default HourlyList;