import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchData = async()=> {
      let result = await fetch('https://swapi.dev/api/starships/')
      result = await result.json()
      console.log(result)
      result = result.results
      setData(result)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
