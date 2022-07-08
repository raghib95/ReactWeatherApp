import React, { useEffect } from 'react';

const WeatherCard = ({tempInfo}) => {

    const [weatherState, setWeatherState] = React.useState("");

    const {
          temp,
          humidity, 
          pressure,
          weatheMood,
          name,
          speed,
          country, 
          sunset,
    } = tempInfo;

    useEffect( () => {
        if(weatheMood){
            switch(weatheMood){
                case "clouds":
                    setWeatherState("wi-day-cloudy");
                    break; 
                case "Haze":
                    setWeatherState("wi-fog");
                    break; 
                case "Mist":
                    setWeatherState("wi-dust");
                    break; 
                case "clear":
                    setWeatherState("wi-day-sunny");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
                    
            };
        };
    }, [weatheMood]);

    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    const timeStr = `${date.getHours()}:${date.getMinutes()} `;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatheMood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{ new Date().toLocaleString()}</div>

        {/* Our 4 coulumn section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p className= {"wi wi-sunset"}></p>
              <p className="extra-info-leftside"> {timeStr} PM <br/> sunset</p>
            </div>

            <div className="two-sided-section">
              <p className= {"wi wi-humidity"}></p>
              <p className="extra-info-leftside"> {humidity} <br/> Humidity</p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p className= {"wi wi-rain"}></p>
              <p className="extra-info-leftside"> {pressure} <br/> Pressure</p>
            </div>

            <div className="two-sided-section">
              <p className= {"wi wi-strong-wind"}></p>
              <p className="extra-info-leftside"> {speed} <br/> Speed</p>
            </div>
          </div>

        </div>
      </article>
    </>
  )
}

export default WeatherCard;
