const Hourly = (props) =>{
    return(
        <div style={{color:'black'}} className='small-card'>
            <ul className='card li'>
                <li>Hora: {props.hour.hora.time}</li>
                <li>Temp: {props.hour.hora.temp}</li>
                <li>Viento: {props.hour.hora.wind}</li>
                
            </ul>
                       
        </div>
    )
};

export default Hourly;