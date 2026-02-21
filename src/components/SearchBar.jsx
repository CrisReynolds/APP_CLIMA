import { useState } from "react";

export default function SearchBar({onSearch}){
    const [texto,setTexto] = useState("");

    const submit = () =>{
        onSearch(texto);
    };

    return(
        <div>
            <input  
            placeholder="Buscar ciudad..." 
            value={texto} 
            onChange={(e)=>setTexto(e.target.value)} 
            />
            <button onClick={submit}>Buscar</button>
        </div>
    );
}