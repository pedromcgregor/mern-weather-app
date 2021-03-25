import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SearchCity from './components/SearchCity';
import Forecast from './components/Forecast';
import HourlyList from './components/HourlyList';
import {citiesMock} from './mock/mock_data';
import {hourMock} from './mock/mock_data';

const App = () => {
  const [viewForecast, setViewForecast] = useState(true);
  const [searchValue, setSearchValue]=useState('');
  const [cities, setCities] = useState (citiesMock);
  const [hour, setHour] = useState (hourMock);

  useEffect(()=>{
    getCityRequest(searchValue);
    
  },[searchValue]);

  useEffect(()=>{

  });

  const getCityRequest = ()=>{
    setCities(cities);
  }

  const getDateWeather=(cities)=>{
    // go for the data
    // change the state of the view Forcast
    setViewForecast(false);
    
  }

  return (
    <div className="container">
      <Header heading ={'Weather Forecast'}/>
      <SearchCity searchValue={searchValue} setSearchValue={setSearchValue}/>
      {viewForecast ? 
      <Forecast cities={cities} 
        handleForecastClick={getDateWeather}/>
        : <HourlyList hour={hour} 
          handleHourlyClick={()=> setViewForecast(true)}/>}
    </div>
  );
}

export default App;
