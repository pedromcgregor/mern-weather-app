import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SearchCity from './components/SearchCity';
import Forecast from './components/Forecast';
import HourlyList from './components/HourlyList';
import {zaragoza, berlin, madrid} from './mock/mock_data';
import {hourMock} from './mock/mock_data';


const App = () => {
  const [viewForecast, setViewForecast] = useState(true);
  const [searchValue, setSearchValue]=useState('');
  const [cities, setCities] = useState (zaragoza);
  const [hour, setHour] = useState (hourMock);

  useEffect(()=>{
    getCityRequest(searchValue);
    
  },[searchValue]);

  useEffect(()=>{
    
  });

  const getCityRequest = ()=>{
    
  }

  const getDateWeather=(cities)=>{
    // go for the data
    // change the state of the view Forcast
    setViewForecast(false);
    
  }

  const options = [
    {label:'Zaragoza',value:'zaragoza'},
    {label:'Madrid',value:'madrid'},
    {label:'Berlin',value:'berlin'},
    
  ]

  const onChangeCity = ({value}) =>{
    switch(value){
      case 'zaragoza':
        console.log(value)  
        setCities(zaragoza)
        return;
      case 'madrid':
        console.log(value)  
        setCities(madrid)
        return;
      case 'berlin':
        console.log(value)  
        setCities(berlin)
        return;
      default:
        return;
    }
      


    console.log(value);
    console.log(cities);
    setCities(`${value}`);
    console.log(cities)
  }

  return (
    <div className="container">
      <Header heading ={'Weather Forecast'}/>
      <SearchCity options={options} onChange={onChangeCity} defaultValue={options[0]}/>
      {viewForecast ? 
      <Forecast cities={cities} 
        handleForecastClick={getDateWeather}/>
        : <HourlyList hour={hour} 
          handleHourlyClick={()=> setViewForecast(true)}/>}
    </div>
  );
}

export default App;
