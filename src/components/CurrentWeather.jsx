export default function CurrentWeather({data}){
    return(
        <div className="card fade-in">
            <h2>{data.name}</h2>

            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Icono" />

            <p>{data.main.temp}°C</p>
            <p>{data.weather[0].description}</p>
            <p>💦{data.main.humidity}%</p>
        </div>
    );
}