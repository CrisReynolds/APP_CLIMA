import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}){
    const [tema, setTema] = useState("claro");

    const cambiarTema = () => {
        setTema((t) =>(t ==="claro" ? "oscuro" : "claro"));
    };

    return(
        <ThemeContext.Provider value={{tema, setTema, cambiarTema}}>
            {children}
        </ThemeContext.Provider>
    );
}