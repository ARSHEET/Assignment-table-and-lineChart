 import LineChart from './components/LineChart'
 import {MedalsTable} from './components/MedalsTable'
import './App.css';
import {useState} from 'react'


const App=()=>{
  const [selected, setSelected] = useState('')

  const showSelectedOption = () => {
    switch(selected){
      case 'table':
      return <MedalsTable />;
      case 'chart':
      return <LineChart />;
      default:
      return '';
    }
  }

  return (<>
    <div className="details">
    Name: Arsheet Kaushal <br/>
    Email: Karsheet@gmail.com <br/>
    Contact: 8950273773
    </div>

    <button className="toggleButton" onClick={()=> setSelected('table')}>Table</button>
    <button className="toggleButton" onClick={()=> setSelected('chart')}>Chart</button>

    {showSelectedOption()}

    
</>

  )
}


export default App;
