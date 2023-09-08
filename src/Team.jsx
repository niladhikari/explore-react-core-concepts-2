import { useState } from "react"

export default function Team() {
    const [team,setTeam] = useState(11)
    
    const handleReduce = () =>{
      const newPlayer = team-1;
        setTeam(newPlayer);
    }
    const handleAdd =() =>{
        const newPlayer = team+1;
        setTeam(newPlayer);
    }

    return(
        <div className="Team">
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}