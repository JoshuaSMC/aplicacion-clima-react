import './WeatherApp.css'
import { useState } from 'react'

export const WeatherApp = () => {

    const [city, setCity] = useState('')
    const [error, setError] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    const urlBase= 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = 'f0ac51e9b82bc95da33e38827163750d'
    const difKelvin= 273.15

    

    const fetchData= async ()=>{
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
            const data = await response.json()
            
            if (response.ok) {
                setWeatherData(data);
                setError(""); 
            } else {
                setWeatherData(null);
                if (data.cod === "404") {
                setError("Ciudad no encontrada. Ingresá una ciudad válida.");
                } else {
                setError("Error al obtener los datos. Intenta nuevamente.");
                }
            }

            setWeatherData(data)
        } catch (error) {
            setWeatherData(null)
            const apiMsg = data?.message
            setError(apiMsg ? apiMsg : 'Error al obtener los datos. Intenta nuevamente.')
            console.error('Ha habido un error: ', error)
        }
    }

    const handleCityChange=(event)=>{
        setCity(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        
          if (!city) {
        setError("Por favor, ingresa una ciudad.");
        setWeatherData(null);
        return;
        }

        fetchData()
    }

    return (
        <div className="container">
            
            <h1>Aplicacion de clima</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingrese una ciudad"
                    value={city}
                    onChange={handleCityChange}
                 />
                <button type="submit">Buscar</button>
            </form>

            {error && <p style={{ fontWeight:'bold'}}>{error}</p>}

            {weatherData && weatherData.main && weatherData.sys && (
                <div>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperatura: {Math.floor(weatherData.main.temp - difKelvin)}°C</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt="icono clima" />

                    <p>Descripción: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}
