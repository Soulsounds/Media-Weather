import React from 'react'

function DisplayWeather(props) {

  const {location, temperature, description, region, country, wind_speed, wind_dir, pressure, precip, humidity, img} = props.weatherData;
  
  return (
    <div className="user-weather">
    <div className="row">
        <div className="col-md-3 weather-temp">
            <h1>{temperature}<sup>o</sup>C , {description}</h1>
            <h4>{location}</h4>
            <p>{region} , {country}</p>
        </div>

        <div className="col-md-9">
            <img className="mainImg" src={img} alt="weather-img" />
        </div>
    </div>

    <div className="row">
        <div className="col-md-2 weather-info">
            <p><b>Wind Speed</b>(km/hr)</p>
            <h2>{wind_speed}</h2>
        </div>

        <div className="col-md-2 weather-info">
            <p><b>Wind Direction</b>(km/hr)</p>
            <h2>{wind_dir}</h2>
        </div>

        <div className="col-md-2 weather-info">
            <p><b>Preassure</b>(millibar)</p>
            <h2>{pressure}</h2>
        </div>

        <div className="col-md-2 weather-info">
            <p><b>Precipitation</b>(mm)</p>
            <h2>{precip}</h2>
        </div>

        <div className="col-md-2 weather-info">
            <p><b>Humidity</b>(%)</p>
            <h2>{humidity}</h2>
        </div>

    </div>
</div>
)
}

export default DisplayWeather
