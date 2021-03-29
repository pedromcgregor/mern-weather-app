const Hourly = (props) =>{
    return(
        <div style={{color:'black'}} className='small-card'>
            <ul className='card li'>
                <li style={{fontWeight:'bold'}}><h2>{props.hour.hora.time}</h2></li>
                <li>Temp: {props.hour.hora.temp}</li>
                <li>Viento: {props.hour.hora.wind}</li>
                
            </ul>
                       
        </div>
    )
};

export default Hourly;