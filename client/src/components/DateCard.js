const DateCard = (props) =>{
    const fecha = new Date(props.cities.dt_txt)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days =['Dom','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    
    return(
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
            <h1 className='center'>{days[fecha.getDay()]} {' '} {fecha.getDate()}</h1>
            <strong className='center'>Temp: {props.cities.main.temp}</strong>
            <img style={{width:'200px', height:'200px' }} src={`http://openweathermap.org/img/w/${props.cities.weather[0].icon}.png`} alt='city' />
            <h1 className='center'>{props.cities.weather[0].description}</h1>
            
        </div>
        <div className='card-back'>
          <h1>{days[fecha.getDay()]} {' '} {fecha.getDate()}</h1>
          <ul>
            <li>
              <strong>Temp:</strong> {props.cities.main.temp}
            </li>
            <li>
              <strong>Min</strong> {props.cities.main.temp_min}
            </li>
            <li>
              <strong>Max:</strong> {props.cities.main.temp_max}
            </li>
            <li>
              <strong>Humedad:</strong> {props.cities.main.humidity}
            </li>
            <li>
              <strong>Presion:</strong> {props.cities.main.pressure}
            </li>
            <li>
              <strong>Viento:</strong> {props.cities.main.wind}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
        
    )
};
export default DateCard;