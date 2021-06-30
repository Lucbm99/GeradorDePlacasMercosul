import React from 'react';
import './App.css';

function App() {

  const handleRandom = () => {
    var letters_numbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", 6, 7, 8, 9];
  
    var selectValues = letters_numbers.splice([Math.floor(Math.random() * letters_numbers.length)], 5);  
    alert(selectValues);
  }
  
  return (
    <div>
      <h3 className="instructions">Clique no botão abaixo para gerar uma numeração aleatória de placa:</h3>
      <div className="generate">
        <button onClick={handleRandom}>Gerar</button>
      </div>
      <div className="rectangle">
        <div class="rectangle-up">
          Brasil
        </div>
      </div>
    </div>
  );
}

export default App;
