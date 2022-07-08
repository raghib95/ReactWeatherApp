// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=588b356ab86cc8b1722928286a82304e

import React, {useEffect, useState} from 'react'
import './style.css'
import WeatherCard from './weatherCard';

const Temp = () => {

  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async() => {
    try{
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=588b356ab86cc8b1722928286a82304e&units=metric`;

       const res = await fetch(url);
        const data = await res.json();

       const { temp, humidity, pressure } = data.main;
       const { main: weatheMood } = data.weather[0];
       const { name } = data;
       const { speed } = data.wind;
       const { country, sunset } = data.sys;
      
       const myNewWeatherInfo = {
          temp,
          humidity, 
          pressure,
          weatheMood,
          name,
          speed,
          country, 
          sunset,
       };

      setTempInfo(myNewWeatherInfo);  
       
    }catch(error){
       console.log(error);
    }
  };

  useEffect( () => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input 
            type="search" 
            placeholder='search...' 
            autoFocus 
            id='search' 
            className='searchTerm' 
            value={searchValue}
            onChange={ (e) => setSearchValue(e.target.value)}  
          />
          <button className="searchButton" type='button' 
          onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

      {/* our temp card */}
      
      <WeatherCard tempInfo={tempInfo}/>

    </>
  )
}

export default Temp;
