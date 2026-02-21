import { useState } from "react";

const API_KEY = "00d0155222c94949dd43bf9f4511589a";

export default function useWeather(){
    const [clima,setClima] = useState(null);
    const [forecast,setForecast] = useState([]);
    const [cargando,setCargando]= useState(false);
    const [error,setError]=useState("");

    const buscar = async (ciudad) =>{
        if(!ciudad) return;

        setCargando(true);
        setError("");

        try{
            //Clima actual
            const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
            if(!res1.ok) throw new Error("ciudad no encontrada");

            const data1 = await res1.json();
            setClima(data1);

            //Pronostico para 5 dias
            const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
            const data2 = await res2.json();

            //Tomar un registro por dia
            const dias = data2.list.filter((_,i)=> i%8 ===0);
            setForecast(dias);

            localStorage.setItem("ultimaCiudad",ciudad);
        }
        catch (err){
            setError(err.message);
            setClima(null);
        }

        setCargando(false);
    };

    return {clima,forecast,cargando,error,buscar};
}