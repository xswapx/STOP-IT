import { useState } from "react";
import { useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enteredPlayerName,setEnteredPlayerName] = useState('Unknown Entity');
  const handleClick = ()=>{
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName}</h2>
      <p>
        <input ref={playerName} type="text" placeholder="All The Best!!" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
