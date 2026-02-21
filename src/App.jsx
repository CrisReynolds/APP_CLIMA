import { useContext,useEffect } from 'react';
import ThemeProvider from './context/ThemeProvider';
import { ThemeContext } from './context/ThemeContext';

import useWeather from './api/useWeather';

import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import ThemeButton from './components/ThemeButton';

import './style/weather.css';

function Contenido() {
  const {tema, setTema} = useContext(ThemeContext);
  const {clima,forecast,cargando,error,buscar} = useWeather();

  //Cargar datos de la ultima ciudad
  useEffect(()=>{
    const c = localStorage.getItem("ultimaCiudad");
    if (c) buscar(c);
  },[]);

  //Tema automatico segun clima
  useEffect(()=>{
    if(!clima) return;

    if(clima.weather[0].main === "Clear") setTema("claro");
    else setTema("oscuro");
  },[clima]);

  return(
    <div className={`app ${tema}`}>
      <h1>APP CLIMA</h1>
      <ThemeButton/>
      <SearchBar onSearch={buscar}/>

      {cargando && <Loader/>}
      {error && <p className="error">{error}</p>}

      {clima && <CurrentWeather data={clima}/>}
      {forecast.length > 0 && <Forecast data={forecast}/>}
    </div>
  );

}

export default function App(){
  return(
    <ThemeProvider>
      <Contenido/>
    </ThemeProvider>
  );
}
