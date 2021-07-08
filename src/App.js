import React from "react";
import './App.css';
import useKonamiCode from "./useKonamiCode";


function App() {
  const callback = () => console.log('Trapaça ativada!')
  const {sequence, rightSequence} = useKonamiCode();
    
  return (
    <div className="App">
      <h1>Konami Code</h1>
          
      <div className="imagem">
          <img
          alt="Konami Code: cima cima baixo baixo esquerda direita esquerda direita B A"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Konami_Code.svg/1920px-Konami_Code.svg.png"
          /> 
      </div>

        <p>
          {sequence.map((key, i)=>(
            <b key={i}> {key}</b>
          ))}
        </p>
        
        {rightSequence &&<h1>Trapaça Ativada</h1>}
    </div>
  );
}

export default App;