import React from 'react';
import './App.css';
import RectangleUp  from './components/RectangleUp';
import Instructions from './components/Instructions';

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

    document.getElementById("value-1").value = select_value_position_1;
    document.getElementById("value-2").value = select_value_position_2;
    document.getElementById("value-3").value = select_value_position_3;
    document.getElementById("value-4").value = select_value_position_4;
    document.getElementById("value-5").value = select_value_position_5;
    document.getElementById("value-6").value = select_value_position_6;
    document.getElementById("value-7").value = select_value_position_7;
    
  }

  
  return (
    <div>
      <Instructions />
      <div className="generate">
        <button onClick={handleRandom}>Gerar</button>
      </div>
      <div className="rectangle">
        <RectangleUp />
        <div className="inputs">
          <input type="text" id="value-1" readOnly /> 
          <input type="text" id="value-2" readOnly /> 
          <input type="text" id="value-3" readOnly /> 
          <input type="text" id="value-4" readOnly /> 
          <input type="text" id="value-5" readOnly /> 
          <input type="text" id="value-6" readOnly /> 
          <input type="text" id="value-7" readOnly /> 
        </div>
      </div>
    </div>
  );
}

export default App;
