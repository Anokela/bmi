
import './App.css';
import {useState}  from 'react'

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  
  function calculateBMI (e) {
    e.preventDefault();
    const calculation = weight / (height * height);
    setBMI(calculation)
  }

  return (
    <div style={{padding: 30}}>
      <h3>Calculating Body mass index</h3>
      <form onSubmit= {calculateBMI}>
        <div>
          <label>Height: </label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight: </label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>BMI</label>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <div><button type="submit">Calculate</button></div>
        {/* Button on oletruksen tyyppiä submit */}
        
      </form>
    </div>
  );
}

export default App;
