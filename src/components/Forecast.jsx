export default function Forecast ({data}){
    return(
        <div className="forecast">
            {data.map((d)=>(
                <div key={d.dt} className="forecast-day fade-in">
                    <p>
                        {new Date(d.dt*1000).toLocaleDateString("es-ES",{
                            weekday: "short",
                        })}
                    </p>
                    <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}.png`} alt="Icono" />
                    <p>{Math.round(d.main.temp)}°C</p>
                </div>
            ))}
        </div>
    );
}