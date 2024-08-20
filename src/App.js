import SitySelector from './components/CitySelector/citySelector';
import CityCard from './components/CityCards';
import './App.css';
import { useState } from 'react';


function App() {
  const [dataCity, setDataCity] = useState("");

function updateCity (newCity) {
 setDataCity(newCity)
}

  return (
    <div className="divApp">
      <SitySelector className="SitySelector" updateCity={updateCity} />
     
      {dataCity ? <CityCard city={dataCity}/> 
      : 
      <div className="pDataCity">
        <p > город не выбран</p>
        </div> }
    </div>
  );
}

export default App;
