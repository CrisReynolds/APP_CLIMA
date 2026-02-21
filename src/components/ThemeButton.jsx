import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton(){
    const {tema,cambiarTema}=useContext(ThemeContext);

    return(
        <button className={`button ${tema}`} onClick={cambiarTema}>
            Tema: {tema}
        </button>
    );
}