import React from 'react';
import './App.css';

function App() {

  const handleRandom = () => {
    let letters_position_1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let letters_position_2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let letters_position_3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbers_position_4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let letters_position_5 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbers_position_6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbers_position_7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let select_value_position_1 = letters_position_1[Math.floor(Math.random() * letters_position_1.length)];  
    let select_value_position_2 = letters_position_2[Math.floor(Math.random() * letters_position_2.length)];  
    let select_value_position_3 = letters_position_3[Math.floor(Math.random() * letters_position_3.length)];  
    let select_value_position_4 = numbers_position_4[Math.floor(Math.random() * numbers_position_4.length)];  
    let select_value_position_5 = letters_position_5[Math.floor(Math.random() * letters_position_5.length)];  
    let select_value_position_6 = numbers_position_6[Math.floor(Math.random() * numbers_position_6.length)];  
    let select_value_position_7 = numbers_position_7[Math.floor(Math.random() * numbers_position_7.length)]; 
    
    console.log(select_value_position_1);
    console.log(select_value_position_2);
    console.log(select_value_position_3);
    console.log(select_value_position_4);
    console.log(select_value_position_5);
    console.log(select_value_position_6);
    console.log(select_value_position_7);
    console.log(select_value_position_1+select_value_position_2+select_value_position_3+select_value_position_4+select_value_position_5+select_value_position_6+select_value_position_7)
  }

  
  return (
    <div>
      <h3 className="instructions">Clique no botão abaixo para gerar uma numeração aleatória de placa:</h3>
      <div className="generate">
        <button onClick={handleRandom}>Gerar</button>
      </div>
      <div className="rectangle">
        <div className="rectangle-up">
          Brasil
        </div>
        <div className="inputs">
          <input type="text" /> 
          <input type="text" /> 
          <input type="text" /> 
          <input type="text" /> 
          <input type="text" /> 
          <input type="text" /> 
          <input type="text" /> 
        </div>
      </div>
    </div>
  );
}

export default App;
